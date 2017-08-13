const series = require('express').Router();
const all = require('./all');
const cover = require('./cover');
const seasons = require('./seasons');

series.get('/', all);
series.use('/:serie', seasons);
series.get('/:serie/cover', cover);

module.exports = series;
