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
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Tag mit 300 km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['Tag mit 300 km']}
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Wochenende mit 500 km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['WE mit 500 km']}
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Woche mit 800 km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['Woche mit 800 km']}
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Monat mit 1000 km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['Monat mit 1000 km']}
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Verlängerungstag 100 km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['Verlängerungstag 100 km']}
            </div>
          </li>
          <li className="col-span-1 flex shadow-sm rounded-md">
            <div className="flex-1 flex items-center justify-between border-t border-l border-b border-gray-200 bg-white rounded-l-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <span className="text-gray-900 font-medium hover:text-gray-600">
                  Zusatz km
                </span>
                {/* <p className="text-gray-500">{data['Tag mit 300 km']}</p> */}
              </div>
            </div>
            <div
              className={classNames(
                'bg-itana-red flex-shrink-0 flex items-center justify-center w-20 text-white text-sm font-medium rounded-r-md'
              )}
            >
              {data['Zusatz km']}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
