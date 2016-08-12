'use strict';

var Nightmare = require('nightmare');
var should = require('chai').should();

describe('Google', function () {
  it('should search "westboro baptist church" when search is clicked', function () {
    var nightmare = new Nightmare({ show: true });
    nightmare
      .goto('http://youtube.com')
      .type('input#masthead-search-term', 'westboro baptist church')
      .click('button#search-btn')
      .wait('#main')
      .evaluate(function () {
        return document.querySelector('#main .searchCenterMiddle li a').href
      })
      .end()
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
});
