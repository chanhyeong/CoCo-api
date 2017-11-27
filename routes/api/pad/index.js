var express = require('express');
var router = express.Router();
var controller = require('./controller');
var directoryController = require('./directory/controller');

router.get('/', controller.terminalConnect, directoryController.getDirectory);

router.use('/directory', require('./directory/router'));

module.exports = router;
