import Head from 'next/head'

import Link from 'next/link'

import SEO from '@/ui/seo'

const Newsfeed = () => (
  <div className='pb-20 bg-white lg:pb-28'>
    <div className='mx-auto max-w-lg lg:max-w-7xl'>
      <div>
        <h1 className='text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10'>
          Blog
        </h1>
      </div>
      <div className='grid grid-cols-1 gap-16 mt-6 border-t-2 border-gray-100 lg:pt-10 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12'>
        <div>
          {/* <p className='text-sm leading-5 text-gray-500'>
            <time dateTime='2020-06-12'>Juni 12, 2020</time>
          </p> */}
          <Link href='/photovoltaikanlage/' className='block'>
            <h2 className='mt-2 mb-2 text-xl font-semibold leading-7 text-gray-900 BlogTitle'>
              Photovoltaikanlage
            </h2>
            <p className='mt-3 text-base leading-6 text-gray-500'>
              Ladebeispiel an einem komplett leeren Tesla Model 3 Performance
              mit einer hauseigenen Photovoltaikanlage
            </p>
          </Link>
          <div className='mt-3'>
            <Link
              href='/photovoltaikanlage/'
              className='text-base font-semibold leading-6 transition duration-150 ease-in-out text-itana-red hover:text-itana-red'
            >
              Weiter lesen
            </Link>
          </div>
        </div>
        <div>
          {/* <p className='text-sm leading-5 text-gray-500'>
            <time dateTime='2020-05-25'>Mai 25, 2020</time>
          </p> */}
          <Link href='/tesla-supercharger-leonberg/' className='block'>
            <h2 className='mt-2 mb-2 text-xl font-semibold leading-7 text-gray-900 BlogTitle'>
              Tesla Supercharger Leonberg
            </h2>
            <p className='mt-3 text-base leading-6 text-gray-500'>
              Die Tesla Supercharger in Leonberg wurden 2018 um 20
              Supercharger-Stationen (auch Stall genannt) erweitert. Ein kleiner
              Tipp: Die meisten Superchargerstationen...
            </p>
          </Link>
          <div className='mt-3'>
            <Link
              href='/tesla-supercharger-leonberg/'
              className='text-base font-semibold leading-6 transition duration-150 ease-in-out text-itana-red hover:text-itana-red'
            >
              Weiter lesen
            </Link>
          </div>
        </div>
        <div>
          {/* <p className='text-sm leading-5 text-gray-500'>
            <time dateTime='2020-05-4'>Mai 4, 2020</time>
          </p> */}
          <Link href='/schulung-elektromobilitaet/' className='block'>
            <h2 className='mt-2 mb-2 text-xl font-semibold leading-7 text-gray-900 BlogTitle'>
              Schulung Elektromobilität
            </h2>
            <p className='mt-3 text-base leading-6 text-gray-500'>
              Wir bieten intensive Schulungen und Vorträge für Autoverkäufer im
              Bereich Elektromobilität an. Kernpunkt ist die Wissensvermittlung
              für die Nutzenargumentation.
            </p>
          </Link>
          <div className='mt-3'>
            <Link
              href='/schulung-elektromobilitaet/'
              className='text-base font-semibold leading-6 transition duration-150 ease-in-out text-itana-red hover:text-itana-red'
            >
              Weiter lesen
            </Link>
          </div>
        </div>
        <div>
          {/*  <p className='text-sm leading-5 text-gray-500'>
            <time dateTime='2020-04-17'>April 17, 2020</time>
          </p> */}
          <Link href='/tesla-langzeitmiete/' className='block'>
            <h2 className='mt-2 mb-2 text-xl font-semibold leading-7 text-gray-900 BlogTitle'>
              Tesla Langzeitmiete
            </h2>
            <p className='mt-3 text-base leading-6 text-gray-500'>
              Im Gegensatz zum Leasing gibt es bei der Tesla Langzeitmiete, viel
              mehr <b>Flexibilität</b>, kürzere <b>Vertragsbindung</b>,
              kurzfristigere <b>Verfügbarkeit</b> und einen <b>fairen</b> Preis.
            </p>
          </Link>
          <div className='mt-3'>
            <Link
              href='/tesla-langzeitmiete/'
              className='text-base font-semibold leading-6 transition duration-150 ease-in-out text-itana-red hover:text-itana-red'
            >
              Weiter lesen
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default function BlogPage () {
  return (
    <div>
      <SEO
        title='Blog - Itana GmbH'
        description='Aktuelle Information über Mobility.itana.de der - Itana GmbH'
      />
      <Head>
        <link rel='canonical' href='https://mobility.itana.de/blog/' />
      </Head>

      <Newsfeed />
    </div>
  )
}
