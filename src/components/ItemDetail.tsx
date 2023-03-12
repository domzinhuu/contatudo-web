import { DateTime } from "luxon";
import { createIntl } from "next-intl";

interface ItemDetailProps {
  destak: string;
  title: string;
  description: string;
  value: number;
}
export default function ItemDetail({
  destak,
  title,
  description,
  value,
}: ItemDetailProps) {
  const format = createIntl({ locale: "pt-br" });

  const getWeekDay = (data: string): string => {
    return `<strong>${DateTime.fromISO(data).day}</strong> ${
      DateTime.fromISO(data).weekdayShort
    }`;
  };
  return (
    <div className="flex flex-wrap mb-2 rounded-md shadow-md shadow-purple-300">
      <span
        dangerouslySetInnerHTML={{ __html: getWeekDay(destak) }}
        className="w-[50px] text-center rounded-tl-md rounded-bl-md bg-purple-100 p-2  box-border"
      ></span>
      <div className="w-[100%] flex flex-col justify-center items-start  flex-1 pl-2 bg-slate-50 box-border">
        <p>{title}</p>
        <span className="italic text-sm">{description}</span>
      </div>

      <span className="w-[80px] sm:w-[120px] text-sm font-bold bg-slate-100 flex items-center justify-center rounded-tr-md rounded-br-md">
        {format.formatNumber(value, {
          style: "currency",
          currency: "BRL",
          currencyDisplay: "symbol",
        })}
      </span>
    </div>
  );
}
