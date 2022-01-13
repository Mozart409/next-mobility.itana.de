import { ReactElement, useState } from 'react'
import { addDays, format } from 'date-fns'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface Props {}

function CarSearch({}: Props): ReactElement {
  const today = new Date()
  const tomorrow = addDays(today, 3)
  const todayDays = format(today, 'yyyy-MM-dd')
  const tomorrowDays = format(tomorrow, 'yyyy-MM-dd')
  const currentHoures = new Date().getUTCHours()

  const [pickUpDate, setPickUpDate] = useState(todayDays)
  const [returnDate, setReturnDate] = useState(tomorrowDays)
  const [pickUpTime, setPickUpTime] = useState('08:00')
  const [returnTime, setReturnTime] = useState('17:00')
  return (
    <div>
      <ul role="list" className="space-y-3">
        <h2>Buchungszeitraum</h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
            {/* Your content */}
            <label htmlFor="pickUpDate">Von </label>
            <input
              type="date"
              id="pickUpDate"
              name="pickUpDate"
              className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red/50 focus:border-itana-red/50"
              onChange={(e) => setPickUpDate(e.target.value)}
              value={pickUpDate}
              min={todayDays}
              required
            />
          </li>

          <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
            <label htmlFor="returnDate">Bis </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red/50 focus:border-itana-red/50"
              onChange={(e) => setReturnDate(e.target.value)}
              value={returnDate}
              min={todayDays}
              required
            />
          </li>

          <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
            <label htmlFor="pickUpTime">Abholzeit</label>
            <input
              type="time"
              id="pickUpTime"
              name="pickUpTime"
              className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red/50 focus:border-itana-red/50"
              onChange={(e) => setPickUpTime(e.target.value)}
              value={pickUpTime}
              required
            />
          </li>

          <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
            <label htmlFor="returnTime">Rückgabezeit</label>
            <input
              type="time"
              id="returnTime"
              name="returnTime"
              className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm focus:ring-itana-red/50 focus:border-itana-red/50"
              onChange={(e) => setReturnTime(e.target.value)}
              value={returnTime}
              required
            />
          </li>
        </div>

        <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
          <a
            href={`https://itana.rentware.io/?fromTime=${pickUpTime}&toTime=${returnTime}&fromDate=${pickUpDate}&toDate=${returnDate}&tab=0`}
            target="_blank"
            rel="noreferrer"
          >
            {/*  "https://itana.rentware.io/?fromTime=08:00&toTime=17:00&fromDate=2022-01-14&toDate=2022-01-14&tab=0" */}
            <button
              type="button"
              className="inline-flex items-center py-3 px-6 w-full text-base font-medium text-white rounded-full border border-transparent shadow-lg focus:ring-2 focus:ring-offset-2 focus:outline-none bg-itana-red/75 shadow-itana-red/50 hover:bg-itana-red/60 focus:ring-itana-red"
            >
              <span className="text-center">Auto suchen</span>
            </button>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default CarSearch
