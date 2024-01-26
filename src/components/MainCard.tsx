import { Weather } from '../interfaces/interface';
import { formatDate } from '../utils/date';

const MainCard = ({ data }: { data: Weather }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md ">
      <div className="flex flex-col justify-between mb-1">
        <h2 className="text-3xl font-bold mb-1 text-center">
          {data.location?.name}, {data.location?.country}
        </h2>
        <h3 className="text-lg font-bold text-center mb-6">
          {formatDate(data.location?.localtime)}
        </h3>
        <img
          src={data.current?.condition.icon}
          alt=""
          className="w-20 h-20 mx-auto my-auto mb-4 border-2 border-blue-400 rounded-full"
        />

        <div className="border-t-4 mb-4 border-cyan-400 flex flex-col items-center text-center justify-center rounded-lg p-4 shadow-lg">
          <h2 className="text-7xl font-bold text-center">
            {data.current?.temp_c}°
          </h2>
          <p className="text-lg font-semibold text-center">
            {data.current?.condition.text}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="border-t-4 border-red-400 rounded-lg flex flex-col justify-center items-center shadow-lg p-3">
            <p className="text-lg font-bold">Humidity</p>
            <p className="text-md">{data.current?.humidity}%</p>
          </div>
          <div className="border-t-4 border-black rounded-lg flex flex-col justify-center items-center shadow-lg p-3">
            <p className="text-lg font-bold">Wind</p>
            <p>{data.current?.wind_kph} Kph</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
