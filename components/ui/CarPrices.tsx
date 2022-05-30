import {FC} from 'react';

interface Props {
  data: {
    Fahrzeug: string;
    'Tag (300)': string;
    'Tag mit 300 km': string;
    'WE (480)': string;
    'WE mit 500 km': string;
    'Verlängerungstag (100)': string;
    'Verlängerungstag 100 km': string;
    'Verlängerungstag (50)': string;
    'Zusatz km': string;
    'Woche (800km)': string;
    'Woche mit 800 km': string;
    'Monat (1058km)': string;
    'Monat mit 1000 km': string;
  };
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const CarPrices: FC<Props> = ({data}) => {
  return (
    <>
      <div>
        <h2 className="text-gray-500 text-xs font-medium uppercase tracking-wide">
          Preise
        </h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div
              className={classNames(
                'bg-pink-600 flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
              )}
            >
              300 km
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                {/*  <a
                  href={project.href}
                  className="text-gray-900 font-medium hover:text-gray-600"
                >
                  {project.name}
                </a> */}
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <button
                  type="button"
                  className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="sr-only">Open options</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
