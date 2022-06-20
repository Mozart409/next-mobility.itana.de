import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import SEO from '@/ui/seo';
export default function ErfolgPage() {
  return (
    <>
      <SEO
        title="Buchungsanfrage | Tesla mieten - Itana GmbH"
        description="Sofort eine Anfrage stellen"
      />
      <Head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://mobility.itana.de/erfolg/" />
      </Head>
      <div className="min-h-full pt-16 pb-12 flex flex-col">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <Link href="/">
              <a className="inline-flex">
                <span className="sr-only">Workflow</span>
                <div className="h-12 w-auto">
                  <Image
                    width={64}
                    height={64}
                    src="/images/icon-192.png"
                    alt="Logo"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-itana-red uppercase tracking-wide">
                Erfolgreiche Buchung
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Erfolgreiche Buchung.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Wir bearbeiten Ihre Anfrage so schnell wie möglich.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-itana-red hover:text-itana-red/60">
                    Zurück auf die Startseite
                    <span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
        {/*   <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Contact Support
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Status
            </a>
            <span
              className="inline-block border-l border-gray-300"
              aria-hidden="true"
            />
            <a
              href="#"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer> */}
      </div>
    </>
  );
}
