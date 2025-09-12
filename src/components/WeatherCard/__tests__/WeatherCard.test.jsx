import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from '../WeatherCard';
import { CurrentTemperatureUnitContext } from '../../../contexts/CurrentTemperatureUnitContext';

describe('WeatherCard', () => {
  const mockWeatherData = {
    temp: {
      F: 75,
      C: 23
    }
  };

  it('renders weather temperature in Fahrenheit', () => {
    render(
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit: 'F' }}>
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );
    
    expect(screen.getByText(/75/)).toBeInTheDocument();
    expect(screen.getByText(/°F/)).toBeInTheDocument();
  });

  it('renders weather temperature in Celsius', () => {
    render(
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit: 'C' }}>
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );
    
    expect(screen.getByText(/23/)).toBeInTheDocument();
    expect(screen.getByText(/°C/)).toBeInTheDocument();
  });
});
