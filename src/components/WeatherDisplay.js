import React from 'react';

const WeatherDisplay = ({ weather }) => {
    const temperatureStyle = {
      color: weather.temperature > 20 ? 'rgb(255, 0, 0)' : 'rgb(0, 0, 255)', // Explicit RGB values
    };
  
    return (
      <div>
        <p style={temperatureStyle}>Temperature: {weather.temperature}</p>
        <p>Conditions: {weather.conditions}</p>
        <span>Weather Data</span>
      </div>
    );
  };
  

export default WeatherDisplay;
