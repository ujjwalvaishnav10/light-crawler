'use strick';

module.exports = require('./lib/crawler');
module.exports.getLinks = require('./lib/utils').getLinks;
module.exports.getImages = require('./lib/utils').getImages;
module.exports.loadHeaders = require('./lib/utils').loadHeaders;
