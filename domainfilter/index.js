/**
* Created with generator-angular-fullstack_StudyGPS.
* User: ysyun
* Date: 2014-05-14
* Time: 06:48 AM
* To change this template use Tools | Templates.
*/
'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createFilterFiles = function createFilterFiles() {
  this.generateDomainSourceAndTest(
    'filter',
    'spec/filter',
    'domain',
    this.options['skip-add'] || false
  );
};