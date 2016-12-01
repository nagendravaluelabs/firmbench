/*jshint node:true*/
var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'firmbench',

  isDevelopingAddon: function() {
    return true;
  },

  included: function included(app) {
    app.import('vendor/fonts/architype-bold/architype-bold.eot');
    app.import('vendor/fonts/architype-bold/architype-bold.svg');
    app.import('vendor/fonts/architype-bold/architype-bold.ttf');
    app.import('vendor/fonts/architype-bold/architype-bold.woff');
    
    app.import('vendor/fonts/architype-light/architype-light.eot');
    app.import('vendor/fonts/architype-light/architype-light.svg');
    app.import('vendor/fonts/architype-light/architype-light.ttf');
    app.import('vendor/fonts/architype-light/architype-light.woff');
    
    app.import('vendor/images/arrow-right.png');
    app.import('vendor/images/arrow-back.png');
    app.import('vendor/images/firm-g1.png');
    app.import('vendor/images/national-g1.png');
    app.import('vendor/images/national-g2.png');
    app.import('vendor/images/drop-down-arrow.jpg');
    
    app.import('vendor/fonts.css');
    app.import('vendor/iframe-style.css');
  },

  treeForVendor: function() {
    return path.join(__dirname, 'vendor');
  },

  treeForPublic: function() {
    if (this.isEnabled) {
      return path.join(__dirname, 'public');
    }
  },

  contentFor: function(which) {
    
  }
};
