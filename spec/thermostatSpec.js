'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees by default', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('is in power saving mode by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('has minimum temperature of 10 degrees', function() {
    thermostat.temperature = thermostat.MINIMUM_TEMPERATURE;
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('will increase temperature by 1', function() {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(22);
  });

  it('will decrease temperature by 1', function() {
    thermostat.down();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });
});
