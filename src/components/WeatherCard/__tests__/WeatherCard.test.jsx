import React from 'react';
import { render, screen } from '@testing-library/react';
import WeatherCard from '../WeatherCard';
import { CurrentTemperatureUnitContext } from '../../../contexts/CurrentTemperatureUnitContext';

describe('WeatherCard', () => {
  const mockWeatherData = {
    temp: {
      F: 75,
      C: 23
    },
    condition: "clear"
  };

  beforeEach(() => {
    // Reset the date mock before each test
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  const mockDayTime = () => {
    jest.setSystemTime(new Date('2025-09-15T12:00:00')); // Noon
  };

  const mockNightTime = () => {
    jest.setSystemTime(new Date('2025-09-15T20:00:00')); // 8 PM
  };

  it('renders weather temperature in Fahrenheit during day', () => {
    mockDayTime();
    render(
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit: 'F' }}>
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );
    
    const tempElement = screen.getByText(/75/);
    expect(tempElement).toBeInTheDocument();
    expect(tempElement.textContent).toMatch(/F$/);
    expect(screen.getByAltText('clear day')).toBeInTheDocument();
  });

  it('renders weather temperature in Celsius during night', () => {
    mockNightTime();
    render(
      <CurrentTemperatureUnitContext.Provider value={{ currentTemperatureUnit: 'C' }}>
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );
    
    const tempElement = screen.getByText(/23/);
    expect(tempElement).toBeInTheDocument();
    expect(tempElement.textContent).toMatch(/C$/);
    expect(screen.getByAltText('clear night')).toBeInTheDocument();
  });
import { render, screen } from "@testing-library/react";
import WeatherCard from "../WeatherCard";
import { CurrentTemperatureUnitContext } from "../../../contexts/CurrentTemperatureUnitContext";

describe("WeatherCard", () => {
  const mockWeatherData = {
    temp: {
      F: 75,
      C: 23,
    },
    condition: "clear",
  };

  it("renders weather temperature in Fahrenheit", () => {
    render(
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit: "F" }}
      >
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );

    const tempElement = screen.getByText(/75/);
    expect(tempElement).toBeInTheDocument();
    expect(tempElement.textContent).toMatch(/F$/);
  });

  it("renders weather temperature in Celsius", () => {
    render(
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit: "C" }}
      >
        <WeatherCard weatherData={mockWeatherData} />
      </CurrentTemperatureUnitContext.Provider>
    );

    const tempElement = screen.getByText(/23/);
    expect(tempElement).toBeInTheDocument();
    expect(tempElement.textContent).toMatch(/C$/);
  });
});
