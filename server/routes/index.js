const routes = require('express').Router();
const series = require('./series');

routes.use('/', series);

module.exports = routes;
