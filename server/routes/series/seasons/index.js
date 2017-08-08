const seasons = require('express').Router({ mergeParams: true });
const all = require('./all');
const episodes = require('./episodes');

seasons.get('/', all);
seasons.use('/:season', episodes);

module.exports = seasons;
