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
        return document.querySelector('id="item-section-714808" li div div div h3').text
      })
      .end()
      .then(function (result) {
        result.should.include('Westboro');
      })
      .catch(function (error) {
        console.error('Search failed:', error);
      });
  });
});
