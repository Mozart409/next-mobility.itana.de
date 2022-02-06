import { FC, ReactElement, useEffect, useState } from "react";
import { addDays, format, toDate } from "date-fns";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function formatDate(date: number | Date) {
  return format(date, "yyyy-MM-dd");
}

interface Props {}

export const CarSearch: FC<Props> = ({}) => {
  const today = new Date();

  const startDate = addDays(today, 2);
  const endDate = addDays(startDate, 7);
  const todayDays = formatDate(startDate);
  const tomorrowDays = formatDate(endDate);

  const [pickUpDate, setPickUpDate] = useState(todayDays);
  const [returnDate, setReturnDate] = useState(tomorrowDays);
  const [pickUpTime, setPickUpTime] = useState("08:00");
  const [returnTime, setReturnTime] = useState("08:00");

  useEffect(() => {
    const d = new Date(pickUpDate);
    const date = addDays(d, 7);
    setReturnDate(formatDate(date));
    return () => {};
  }, [pickUpDate]);

  return (
    <div>
      <ul role="list" className="space-y-3">
        <h2>Buchungszeitraum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
            <label htmlFor="pickUpDate">Von </label>
            <input
              type="date"
              id="pickUpDate"
              name="pickUpDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
              onChange={(e) => setPickUpDate(e.target.value)}
              value={pickUpDate}
              min={todayDays}
              required
            />
          </li>

          <li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
            <label htmlFor="returnDate">Bis </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
              onChange={(e) => setReturnDate(e.target.value)}
              value={returnDate}
              min={pickUpDate}
              required
            />
          </li>

          <li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
            <label htmlFor="pickUpTime">Abholzeit</label>
            <input
              type="time"
              id="pickUpTime"
              name="pickUpTime"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
              onChange={(e) => setPickUpTime(e.target.value)}
              value={pickUpTime}
              required
            />
          </li>

          <li className="overflow-hidden bg-white py-4 px-4 shadow sm:rounded-md sm:px-6">
            <label htmlFor="returnTime">Rückgabezeit</label>
            <input
              type="time"
              id="returnTime"
              name="returnTime"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-itana-red/50 focus:ring-itana-red/50 sm:text-sm"
              onChange={(e) => setReturnTime(e.target.value)}
              value={returnTime}
              required
            />
          </li>
        </div>

        <li className="overflow-hidden bg-white py-4 px-4 sm:rounded-md sm:px-6">
          <a
            href={`https://itana.rentware.io/?fromTime=${pickUpTime}&toTime=${returnTime}&fromDate=${pickUpDate}&toDate=${returnDate}&tab=0`}
            target="_blank"
            rel="noreferrer"
          >
            {/*  "https://itana.rentware.io/?fromTime=08:00&toTime=17:00&fromDate=2022-01-14&toDate=2022-01-14&tab=0" */}
            <button
              type="button"
              className="inline-flex w-full items-center rounded-full border border-transparent bg-itana-red/75 py-3 px-6 text-base font-medium text-white shadow-lg shadow-itana-red/50 hover:bg-itana-red/60 focus:outline-none focus:ring-2 focus:ring-itana-red focus:ring-offset-2"
            >
              <span className="text-center">Auto suchen</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  );
};
