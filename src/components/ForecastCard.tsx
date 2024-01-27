import { Forecast } from '../interfaces/interface';
import { formatDate } from '../utils/date';

const ForecastCard = ({
  forecast,
  date,
}: {
  forecast?: Forecast;
  date?: string;
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-[100%] flex flex-col justify-center">
      <div className="border-t-4 border-yellow-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3  mb-4">
        <p className="text-lg font-bold">Average Temp</p>
        <p>{forecast?.forecastday[0].day.avgtemp_c}</p>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="border-t-4 border-red-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3">
          <p className="text-lg font-bold">Max Temp</p>
          <p className="text-md">{forecast?.forecastday[0].day.maxtemp_c}°</p>
        </div>
        <div className="border-t-4 border-red-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3">
          <p className="text-lg font-bold">Min Temp</p>
          <p className="text-md">{forecast?.forecastday[0].day.mintemp_c}°</p>
        </div>
      </div>
      <div className="border-t-4 border-orange-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3  mb-4">
        <p className="text-lg font-bold">Chance of rain</p>
        <p>{forecast?.forecastday[0].day.daily_chance_of_rain}%</p>
      </div>
      <div className="border-t-4 border-purple-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3  mb-4">
        <p className="text-lg font-bold">Last Updated</p>
        <p>{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default ForecastCard;
