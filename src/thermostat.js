'use strict';

function Thermostat() {
  this.powerSavingMode = true;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.PSM_ON_MAXIMUM_TEMPERATURE = 25;
  this.PSM_OFF_MAXIMUM_TEMPERATURE = 32;
  this.DEFAULT_TEMPERATURE = 20;
};

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  };
    return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  };
  return this.temperature -= 1;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.powerSavingMode === false) {
    return this.temperature === this.PSM_OFF_MAXIMUM_TEMPERATURE;
  }
    return this.temperature === this.PSM_ON_MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.powerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.powerSavingMode = true;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
