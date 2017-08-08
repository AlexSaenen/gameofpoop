const episodes = require('express').Router({ mergeParams: true });
const all = require('./all');
const single = require('./single');

episodes.get('/', all);
episodes.get('/:episode', single);

module.exports = episodes;
