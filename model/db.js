/*
* @Author: anchenlee
* @Date:   2016-10-11 14:39:28
* @Last Modified by:   anchenlee
* @Last Modified time: 2016-10-13 14:08:55
*/
'use strict';
var mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
var db = mongoose.createConnection( 'mongodb://localhost/album' );
module.exports = db;
