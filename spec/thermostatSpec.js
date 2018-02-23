'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees by default', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(this.DEFAULT_TEMPERATURE);
  });

  it('is in PSM by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it('can switch PSM on', function() {
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('has minimum temperature of 10 degrees', function() {
    thermostat.temperature = thermostat.MINIMUM_TEMPERATURE;
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.MINIMUM_TEMPERATURE);
  });

  it('has a maximum temperature of 25 with PSM ON', function() {
    thermostat.switchPowerSavingModeOn();
    thermostat.temperature = thermostat.PSM_ON_MAXIMUM_TEMPERATURE;
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.PSM_ON_MAXIMUM_TEMPERATURE);
  });

  it('has a maximum temperature of 32 with PSM OFF', function() {
    thermostat.switchPowerSavingModeOff();
    thermostat.temperature = thermostat.PSM_OFF_MAXIMUM_TEMPERATURE;
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.PSM_OFF_MAXIMUM_TEMPERATURE);
  });

  it('will increase temperature by 1', function() {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(this.DEFAULT_TEMPERATURE + 2);
  });

  it('will decrease temperature by 1', function() {
    thermostat.down();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(this.DEFAULT_TEMPERATURE - 1);
  });

  it('resets the temperature to DEFAULT', function() {
    thermostat.up();
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
  });
});
