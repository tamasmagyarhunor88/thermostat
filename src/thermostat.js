'use strict';

function Thermostat() {
  this.powerSavingMode = true;
  this.DEFAULT_TEMPERATURE = 20;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.MINIMUM_TEMPERATURE = 10;
  this.PSM_ON_MAXIMUM_TEMPERATURE = 25;
  this.PSM_OFF_MAXIMUM_TEMPERATURE = 32;
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

Thermostat.prototype.switchPowerSavingMode = function () {
  this.powerSavingMode = !this.powerSavingMode;
};

Thermostat.prototype.reset = function () {
  this.temperature = this.DEFAULT_TEMPERATURE;
};
