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

module.exports = (req, res) => {

  getSeries()
  .then(series => series.find(serie => serie.path === req.params.serie))
  .then((chosenSerie) => {
    const pathToChosenSerie = path.join(basePath, chosenSerie.name);

    fs.readdir(pathToChosenSerie, (err, files) => {
      if (err) {
        return res.status(500).json({ err });
      }

      const seasons = files
      .map((file) => path.join(pathToChosenSerie, file))
      .filter((file) => fs.statSync(file).isDirectory())
      .map((file) => path.basename(file))
      .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

      return res.status(200).json(seasons);
    });
  })
  .catch(err => res.status(500).json({ err }));
};
