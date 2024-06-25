const express = require('express');

const { getTime } = require('../controller/date-controller');

const app = express.Router();

app.get('/:date?',getTime);

module.exports = app;