import Link from 'next/link'

export default function Footer () {
  return (
    <footer aria-label='footer' id='footer'>
      <div className='mt-16 bg-white'>
        <div className='overflow-hidden py-12 px-4 mx-auto max-w-screen-xl sm:px-6 lg:px-8'>
          <nav className='flex flex-wrap justify-center -my-2 -mx-5'>
            <div className='py-2 px-5'>
              <Link
                href='/blog/'
                className='text-base leading-6 text-gray-600 hover:text-gray-900'
              >
                <a>Blog</a>
              </Link>
            </div>

            <div className='py-2 px-5'>
              <Link
                href='/mietbedingungen/'
                className='text-base leading-6 text-gray-600 hover:text-gray-900'
              >
                <a>Mietbedingungen</a>
              </Link>
            </div>
            <div className='py-2 px-5'>
              <a
                href='https://itana.de/impressum/'
                className='text-base leading-6 text-gray-600 hover:text-gray-900'
              >
                Impressum
              </a>
            </div>
            <div className='py-2 px-5'>
              <a
                href='https://itana.de/datenschutz/'
                className='text-base leading-6 text-gray-600 hover:text-gray-900'
              >
                Datenschutz
              </a>
            </div>
          </nav>
          <div className='mt-8'>
            <p className='text-base leading-6 text-center text-gray-600'>
              &copy; {new Date().getFullYear()} Itana GmbH.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
