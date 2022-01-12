import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRange } from 'react-date-range'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

//

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

interface Props {}

const houres = [
  { id: 1, name: '0:00' },
  { id: 2, name: '1:00' },
  { id: 3, name: '2:00' },
  { id: 4, name: '3:00' },
  { id: 5, name: '4:00' },
  { id: 6, name: '5:00' },
  { id: 7, name: '6:00' },
  { id: 8, name: '7:00' },
  { id: 9, name: '8:00' },
  { id: 10, name: '9:00' },
  { id: 11, name: '10:00' },
  { id: 12, name: '11:00' },
  { id: 13, name: '12:00' },
  { id: 14, name: '13:00' },
  { id: 15, name: '14:00' },
  { id: 16, name: '15:00' },
  { id: 17, name: '16:00' },
  { id: 18, name: '17:00' },
  { id: 19, name: '18:00' },
  { id: 20, name: '19:00' },
  { id: 21, name: '20:00' },
  { id: 22, name: '21:00' },
  { id: 23, name: '22:00' },
  { id: 24, name: '23:00' },
  { id: 25, name: '24:00' },
]

function createDateString(dateObj: Date) {
  if (dateObj) {
    const month = dateObj.getUTCMonth() + 1 //months from 1-12
    const day = dateObj.getUTCDate() + 1
    const year = dateObj.getUTCFullYear()

    const newDate = year + '-' + month + '-' + day

    return newDate
  }
  return null
}

function CarSearch({}: Props): ReactElement {
  const currentHoures = new Date().getUTCHours()

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null as Date,
      key: 'selection',
    },
  ])

  const [getTime, setGetTime] = useState(houres[currentHoures + 1])

  const [returnTime, setReturnTime] = useState(houres[currentHoures + 2])

  const [disabled, setDisabled] = useState(true)

  const startDate = createDateString(state[0].startDate)
  const endDate = createDateString(state[0]?.endDate)

  return (
    <div className="px-0 pt-4 md:px-4 md:pb-8 lg:px-8 lg:pb-12">
      <div className="overflow-hidden bg-white rounded-lg shadow shadow-itana-red/50 border border-itana-red">
        {/*  <div className="py-5 px-4 sm:px-6">
         
          <h2>Schnell Autos finden.</h2>
        </div> */}

        <div className="p-0 py-5 md:px-4">
          {/* Content goes here */}

          <div className="px-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 justify-items-center">
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                retainEndDateOnFirstSelection={true}
                minDate={new Date()}
                ranges={state}
              />
            </div>
            <div>
              <div>
                <Listbox value={getTime} onChange={setGetTime}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        Abhol Zeit
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-md border border-gray-300 shadow-sm cursor-default sm:text-sm focus:ring-1 focus:outline-none focus:ring-itana-red focus:border-itana-red">
                          <span className="block truncate">
                            {getTime.name} Uhr
                          </span>
                          <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                            {houres.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? 'text-white bg-itana-red'
                                      : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {person.name} Uhr
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? 'text-white'
                                            : 'text-itana-red',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                      >
                                        <CheckIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
              <div>
                <Listbox value={returnTime} onChange={setReturnTime}>
                  {({ open }) => (
                    <>
                      <Listbox.Label className="block text-sm font-medium text-gray-700">
                        Rückgabe Zeit
                      </Listbox.Label>
                      <div className="relative mt-1">
                        <Listbox.Button className="relative py-2 pr-10 pl-3 w-full text-left bg-white rounded-md border border-gray-300 shadow-sm cursor-default sm:text-sm focus:ring-1 focus:outline-none focus:ring-itana-red focus:border-itana-red">
                          <span className="block truncate">
                            {returnTime.name} Uhr
                          </span>
                          <span className="flex absolute inset-y-0 right-0 items-center pr-2 pointer-events-none">
                            <SelectorIcon
                              className="w-5 h-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="overflow-auto absolute z-10 py-1 mt-1 w-full max-h-60 text-base bg-white rounded-md ring-1 ring-black ring-opacity-5 shadow-lg sm:text-sm focus:outline-none">
                            {houres.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active
                                      ? 'text-white bg-itana-red'
                                      : 'text-gray-900',
                                    'cursor-default select-none relative py-2 pl-3 pr-9'
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <span
                                      className={classNames(
                                        selected
                                          ? 'font-semibold'
                                          : 'font-normal',
                                        'block truncate'
                                      )}
                                    >
                                      {person.name} Uhr
                                    </span>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active
                                            ? 'text-white'
                                            : 'text-itana-red',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                      >
                                        <CheckIcon
                                          className="w-5 h-5"
                                          aria-hidden="true"
                                        />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
          </div>
        </div>
        <div className="py-4 px-4 sm:px-6">
          {/* Content goes here */}
          {/* We use less vertical padding on card footers at all sizes than on headers or body sections */}
          <a
            href={`https://itana.rentware.io/?fromTime=${getTime.name}&toTime=${returnTime.name}&fromDate=${startDate}&toDate=${endDate}&tab=0`}
            target="_blank"
            rel="noreferrer"
          >
            {/*  "https://itana.rentware.io/?fromTime=08:00&toTime=17:00&fromDate=2022-01-14&toDate=2022-01-14&tab=0" */}
            <button
              type="button"
              className="inline-flex items-center py-3 px-6 w-full text-base font-medium text-white rounded-full border border-transparent focus:ring-2 focus:ring-offset-2 focus:outline-none bg-itana-red/75 hover:bg-itana-red/60 focus:ring-itana-red shadow-lg shadow-itana-red/50"
            >
              <span className="text-center">Auto suchen</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default CarSearch
