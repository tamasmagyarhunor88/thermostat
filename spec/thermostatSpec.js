'use strict';

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
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
