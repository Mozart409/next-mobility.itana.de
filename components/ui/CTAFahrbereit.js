import Link from 'next/link';

const CTAFahrbereit = () => (
  <div className="border-1 flex overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
    <div className="my-auto mx-auto text-center">
      <div className="flex-1 items-center">
        <h2 className="mt-4 mb-2 text-xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl sm:leading-8">
          Bereit zum Fahren?
        </h2>
        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow">
            <Link href="/buchungs-anfrage/">
              <a className="Kachel focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent border-itana-red py-3 px-5 text-base font-semibold leading-6 text-gray-900 transition duration-150 ease-in-out hover:bg-red-500 hover:text-white focus:outline-none">
                Tesla mieten
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex">
            <Link passHref href="/tesla/model-3-mieten/">
              <a className="Kachel focus:shadow-outline inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 py-3 px-5 text-base font-semibold leading-6 text-gray-700 transition duration-150 ease-in-out hover:bg-red-50 hover:text-red-600 focus:border-indigo-300 focus:outline-none">
                Mehr Informationen
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CTAFahrbereit;
