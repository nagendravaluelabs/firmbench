/*jshint node:true*/
var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'charts-extend',

  isDevelopingAddon: function() {
    return true;
  },

  included: function included(app) {
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
