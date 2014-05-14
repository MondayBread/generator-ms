/**
* Created with generator-angular-fullstack_StudyGPS.
* User: ysyun
* Date: 2014-05-14
* Time: 06:38 AM
* To change this template use Tools | Templates.
*/
'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');


var Generator = module.exports = function Generator() {
  ScriptBase.apply(this, arguments);

  // if the controller name is suffixed with ctrl, remove the suffix
  // if the controller name is just "ctrl," don't append/remove "ctrl"
  if (this.name && this.name.toLowerCase() !== 'ctrl' && this.name.substr(-4).toLowerCase() === 'ctrl') {
    this.name = this.name.slice(0, -4);
  }
};

util.inherits(Generator, ScriptBase);

Generator.prototype.createControllerFiles = function createControllerFiles() {
  this.generateDomainSourceAndTest(
    'controller',
    'spec/controller',
    'domain',
    this.options['skip-add'] || false
  );
};