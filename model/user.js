/*
* @Author: anchenlee
* @Date:   2016-10-13 10:02:24
* @Last Modified by:   anchenlee
* @Last Modified time: 2016-10-13 14:08:21
*/

'use strict';
var mongoose = require('mongoose');
var db = require('./db');

var userSchema = new mongoose.Schema({
	userName: String
});

var userModel = db.model('users', userSchema);

module.exports = userModel;