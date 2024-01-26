import axios from 'axios';
import MainCard from './components/MainCard';

import { useEffect, useState } from 'react';
import { Weather } from './interface';
import ForecastCard from './components/ForecastCard';

function App() {
  const [data, setData] = useState<Weather>({});
  const [city, setCity] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  const fetchData = () => {
    if (city.trim() === '') {
      setCity('Medellin');
    }
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=301e715d3bdf4cd4aef14718242501&q=${city}&days=1&aqi=no&alerts=no
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

  console.log();

  useEffect(() => {}, [data]);

  return (
    <div className="w-full h-full relative">
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
      </div>
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-[900px] flex justify-center gap-5 mx-auto my-auto">
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Mon</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Tues</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Wed</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Thurs</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Fri</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Sat</h3>
          <p>45°/20°</p>
        </div>
        <div
          className="bg-white/100 p-5
          w-28
          h-28
          gap-4
          rounded-lg
          shadow-2xl
          border-t-4
          border-green-400 flex flex-col items-center justify-between"
        >
          <h3 className="font-bold">Sun</h3>
          <p>45°/20°</p>
        </div>
      </div>
    </div>
  );
}

export default App;
