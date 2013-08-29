"use strict";

var request = require("request")
  , _ = require("underscore")
  , monocle = require('monocle.js')
  , o_C = monocle.o_C
  , o_O = monocle.o_O;

var monoclize = function(wrappedFn, wrappedObj) {
  return o_O(function*() {
    var cb = o_C();
    var args = Array.prototype.slice.call(arguments, 0);
    args.push(cb);
    wrappedFn.apply(wrappedObj, args);
    return (yield cb);
  });
};

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

