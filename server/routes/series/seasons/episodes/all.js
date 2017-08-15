const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'server/database');

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

module.exports = (req, res) => {

  getSeries()
  .then(series => series.find(serie => serie.path === req.params.serie))
  .then((chosenSerie) => {
    return getSeasons(path.join(basePath, chosenSerie.name))
    .then(seasons => seasons.find(season => season.path === req.params.season))
    .then((chosenSeason) => {
      const pathToChosenSeason = path.join(path.join(basePath, chosenSerie.name), chosenSeason.name);

      fs.readdir(pathToChosenSeason, (err, files) => {
        if (err) {
          return res.status(500).json({ err });
        }

        const episodes = files
        .map((file) => path.join(pathToChosenSeason, file))
        .filter((file) => fs.statSync(file).isFile())
        .map((file) => path.basename(file).replace('.mkv', ''))
        .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

        return res.status(200).json(episodes);
      });
    })
  })
  .catch(err => res.status(500).json({ err }));
};
