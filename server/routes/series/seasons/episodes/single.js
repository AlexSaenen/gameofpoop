const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'server/tmpData');

const getSeries = () => new Promise((resolve, reject) => {
  fs.readdir(basePath, (err, files) => {
    if (err) {
      return reject(err);
    }

    const series = files
    .map((file) => path.join(basePath, file))
    .filter((file) => fs.statSync(file).isDirectory())
    .map((file) => path.basename(file))
    .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

    return resolve(series);
  });
});

const getSeasons = (seriePath) => new Promise((resolve, reject) => {
  fs.readdir(seriePath, (err, files) => {
    if (err) {
      return reject(err);
    }

    const seasons = files
    .map((file) => path.join(seriePath, file))
    .filter((file) => fs.statSync(file).isDirectory())
    .map((file) => path.basename(file))
    .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

    return resolve(seasons);
  });
});

const getEpisodes = (seasonPath) => new Promise((resolve, reject) => {
  fs.readdir(seasonPath, (err, files) => {
    if (err) {
      return reject(err);
    }

    const episodes = files
    .map((file) => path.join(seasonPath, file))
    .filter((file) => fs.statSync(file).isFile())
    .map((file) => path.basename(file))
    .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

    return resolve(episodes);
  });
});

const streamEpisode = (videoPath, req, res) => {
  fs.stat(videoPath, (err, stats) => {
    if (err) {
      if (err.code === 'ENOENT') {
        return res.sendStatus(404);
      }

      res.end(err);
    }

    const range = req.headers.range;

    if (!range) {
      return res.sendFile(videoPath);
    }

    const positions = range.replace(/bytes=/, "").split("-");
    const start = parseInt(positions[0], 10);
    const total = stats.size;
    const end = positions[1] ? parseInt(positions[1], 10) : total - 1;
    const chunksize = (end - start) + 1;

    res.writeHead(206, {
      "Content-Range": "bytes " + start + "-" + end + "/" + total,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/x-matroska"
    });

    const stream = fs.createReadStream(videoPath, { start, end })
      .on("open", () => {
        stream.pipe(res);
      }).on("error", (err) => {
        res.end(err);
      });
  });
};

module.exports = (req, res) => {

  getSeries()
  .then(series => series.find(serie => serie.path === req.params.serie))
  .then((chosenSerie) => {
    return getSeasons(path.join(basePath, chosenSerie.name))
    .then(seasons => seasons.find(season => season.path === req.params.season))
    .then((chosenSeason) => {
      const pathToChosenSeason = path.join(path.join(basePath, chosenSerie.name), chosenSeason.name);
      return getEpisodes(pathToChosenSeason)
      .then(episodes => episodes.find(episode => episode.path === req.params.episode))
      .then((chosenEpisode) => {
        const pathToEpisode = path.join(pathToChosenSeason, chosenEpisode.name);
        streamEpisode(pathToEpisode, req, res);
      });
    })
  })
  .catch(err => res.status(500).json({ err }));
};
