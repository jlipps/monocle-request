/*global describe:true, it:true */
"use strict";

var request = require("../lib/request")
  , should = require("should")
  , run = require("monocle.js").run;

describe('monocle-request', function() {
  var testUrl = "http://google.com";

  it('should get a url', function(done) {
    run(function*() {
      var res = yield request(testUrl);
      res[1].should.include("Google");
      done();
    });
  });

});
