import React, { useState, useEffect } from 'react';
import WeatherDisplay from './WeatherDisplay';


const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, Conditions: '' });

  useEffect(() => {
    const weatherInput = { temperature: 25, Conditions: 'Sunny' }; // Correct data
    setWeather(weatherInput);
  }, []);

  return (
    <div>
      <h1>Weather Report</h1>
      <WeatherDisplay weather={weather} />
    </div>
  );
};


export default App;
