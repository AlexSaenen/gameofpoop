const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'server/tmpData');

module.exports = (req, res) => {
  fs.readdir(basePath, (err, files) => {
    if (err) {
      return res.status(500).json({ err });
    }

    const series = files
    .map((file) => path.join(basePath, file))
    .filter((file) => fs.statSync(file).isDirectory())
    .map((file) => path.basename(file))
    .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, '') }));

    // here also for each folder, go inside and try to load icon.png

    return res.status(200).json(series);
  });
};
