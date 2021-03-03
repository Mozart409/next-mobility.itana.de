import Link from 'next/link'
const CTAFahrbereit = () => (
  <div className='flex overflow-hidden bg-gray-50 rounded-lg border border-gray-200 border-1'>
    <div className='my-auto mx-auto text-center'>
      <div className='flex-1 items-center '>
        <h2 className='mt-4 mb-2 text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10'>
          Bereit zum Fahren?
        </h2>
        <div className='flex justify-center mt-8'>
          <div className='inline-flex rounded-md shadow'>
            <a
              href='https://reservation.itana.de/'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-semibold leading-6 text-gray-900 rounded-md border border-transparent transition duration-150 ease-in-out Kachel border-itana-red hover:bg-red-500 hover:text-white focus:outline-none focus:shadow-outline'
            >
              Tesla mieten
            </a>
          </div>
          <div className='inline-flex ml-3'>
            <Link
              href='/tesla/model-3-mieten/'
              className='inline-flex justify-center items-center py-3 px-5 text-base font-semibold leading-6 text-gray-700 bg-red-100 rounded-md border border-transparent transition duration-150 ease-in-out Kachel hover:text-red-600 hover:bg-red-50 focus:outline-none focus:shadow-outline focus:border-indigo-300'
            >
              <a>Mehr Informationen</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default CTAFahrbereit
