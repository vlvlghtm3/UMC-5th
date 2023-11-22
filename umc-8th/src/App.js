import React, { useState } from 'react';
import axios from 'axios';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '4dcda6a3cfbfbb637a75178613216b97';

  const searchWeather = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
      setWeatherData(response.data);
    } catch (error) {
      console.error('날씨 정보를 가져오는 중 에러 발생:', error.message);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="도시를 입력하세요"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {weatherData && (
        <div>
          <h2>{weatherData.name}의 현재 날씨</h2>
          <p>기온: {Math.round((weatherData.main.temp)-273.15)}°C</p>
          <p>날씨: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
