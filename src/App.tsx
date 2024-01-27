import axios from 'axios';
import MainCard from './components/MainCard';

import { useEffect, useState } from 'react';
import { Weather } from './interfaces/interface';
import ForecastCard from './components/ForecastCard';
import WeekCard from './components/WeekCard';

function App() {
  const [data, setData] = useState<Weather>({});
  const [city, setCity] = useState('Medellin');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = () => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=${city}&days=8&aqi=no&alerts=no
        `
      )
      .then((response) => {
        const mappedData: Weather = {
          location: response.data.location,
          current: response.data.current,
          forecast: response.data.forecast,
        };
        setData(mappedData);
      });
  };

  useEffect(() => {
    fetchData();
  }, [data]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mx-auto my-auto">
      <h1 className="text-center text-5xl mt-5 mb-5 font-bold">Weather App</h1>
      <div className="text-center p-4">
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          className="py-3 px-6 w-[500px] text-lg rounded-3xl border border-gray200 text-gray-600 placeholder:text-gray-40 focus:outline-none bg-white-600/100
        shadow-md text-center mb-5"
          placeholder="Enter location"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="grid grid-cols-2 content-center gap-4 max-w-[900px] mx-auto mb-14">
        <MainCard data={data} />
        <ForecastCard
          forecast={data.forecast}
          date={data.current?.last_updated}
        />
        <WeekCard data={data} />
      </div>
    </div>
  );
}

/* 
  
*/

export default App;
