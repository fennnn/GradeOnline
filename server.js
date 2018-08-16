<!-- Copyright (c) 2018 Fenting Lin -->
<!-- GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007 -->

'use strict';
var express = require('express');

var server = express();

server.use('/', express.static(__dirname + '/'));

server.listen(8080);