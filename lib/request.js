"use strict";

var request = require("request")
  , _ = require("underscore")
  , monocle = require('monocle-js')
  , monoclize = monocle.monoclize;

var monocle_request = monoclize(request);
var methods = [
  'get'
  , 'post'
  , 'put'
  , 'patch'
  , 'head'
  , 'del'
];

_.each(methods, function(method) {
  monocle_request[method] = monoclize(request[method], request);
});

module.exports = monocle_request;

