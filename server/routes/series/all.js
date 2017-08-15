const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'server/database');
const urls = {
  'Game of Thrones': 'http://ll-c.ooyala.com/e1/11cnduYjE6BQ5jWju1l4_-cAa5rebe7x/promo322954306',
  'Freaks and Geeks': 'https://art-s.nflximg.net/c41e8/d8d58035f11e1ee46fcb5b2e7a0aebe0e0ac41e8.jpg',
};

module.exports = (req, res) => {
  fs.readdir(basePath, (err, files) => {
    if (err) {
      return res.status(500).json({ err });
    }

    const series = files
    .map((file) => path.join(basePath, file))
    .filter((file) => fs.statSync(file).isDirectory())
    .map((file) => path.basename(file))
    .map((file) => ({ name: file, path: file.toLowerCase().replace(/ /g, ''), url: urls[file] }));

    return res.status(200).json(series);
  });
};
