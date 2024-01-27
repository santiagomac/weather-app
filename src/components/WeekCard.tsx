import { Weather } from '../interfaces/interface';
import { dayOfWeeks } from '../const/week';

const WeekCard = ({ data }: { data: Weather }) => {
  const newWeekArray =
    data.forecast?.forecastday !== undefined
      ? data.forecast?.forecastday.slice(1, data.forecast?.forecastday.length)
      : [];

  return (
    <div className="bg-white p-8 rounded-lg shadow-2xl w-[900px] flex justify-center gap-5 mx-auto my-auto">
      {newWeekArray.map((item) => {
        const localDate = new Date(`${item.date}T12:00:00Z`);
        return (
          <div
            key={item.date_epoch}
            className="bg-white/100 p-5
                w-28
                h-28
                rounded-lg
                shadow-2xl
                border-t-4
                border-green-400 flex flex-col items-center justify-between"
          >
            <h3 className="font-bold">
              {dayOfWeeks[localDate.getDay()].substring(0, 3)}
            </h3>
            <img src={item.day.condition.icon} alt="" className="w-10 h-10" />
            <p className="text-sm">
              {item.day.maxtemp_c}°/{item.day.mintemp_c}°
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default WeekCard;
