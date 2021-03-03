import React from 'react'

export default function Preisliste({ kurzzeit }) {
  return (
    <div>
      {console.log(kurzzeit)}
      <div>
        <ul className="space-y-3">
          <li className="overflow-hidden py-4 px-4 bg-white shadow sm:px-6 sm:rounded-md">
            <div className="overflow-hidden bg-white shadow sm:rounded-md">
              <ul className="divide-y divide-gray-200">
                <h2>Kurzzeittarife</h2>
                {kurzzeit?.map((item) => (
                  <li key={item._id}>
                    <div className="block hover:bg-gray-50">
                      <div className="py-4 px-4 sm:px-6">
                        <div className="flex justify-between items-center">
                          <p className="text-sm font-medium text-indigo-600 truncate">
                            Back End Developer
                          </p>
                          <div className="flex flex-shrink-0 ml-2">
                            <p className="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                              Full-time
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex">
                            <p className="flex items-center text-sm text-gray-500">
                              {/* <!-- Heroicon name: solid/users --> */}
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                              </svg>
                              Engineering
                            </p>
                            <p className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              {/* <!-- Heroicon name: solid/location-marker --> */}
                              <svg
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              Remote
                            </p>
                          </div>
                          <div className="flex items-center mt-2 text-sm text-gray-500 sm:mt-0">
                            {/* <!-- Heroicon name: solid/calendar --> */}
                            <svg
                              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p>
                              Closing on
                              <time dateTime="2020-01-07">January 7, 2020</time>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}{' '}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
