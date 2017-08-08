const series = require('express').Router();
const all = require('./all');
const seasons = require('./seasons');

series.get('/', all);
series.use('/:serie', seasons);

module.exports = series;
