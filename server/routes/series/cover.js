const fs = require('fs');
const path = require('path');

const basePath = path.join(process.cwd(), 'server/database');

module.exports = (req, res) => {
  const filePath = path.join(path.join(basePath, req.params.serie), 'cover.jpg');

  return res.sendFile(filePath);
};
