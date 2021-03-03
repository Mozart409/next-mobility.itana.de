import Link from 'next/link'
import Head from 'next/head'
import { tw } from 'twind'
import 'twind/shim'
import ScrollToTop from 'react-scroll-up'

import Footer from './Footer'
import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <div className={tw`flex flex-col min-h-screen text-gray-900`}>
      <Nav />
      <div id="main">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K56QMGF"
            height="0"
            width="0"
          ></iframe>
        </noscript>

        <main
          id="content"
          aria-label="main"
          role="main"
          className="flex-1 p-4 mx-auto w-full max-w-7xl md:px-8"
        >
          {children}
        </main>
      </div>
      <ScrollToTop showUnder={200}>
        <div className="invisible p-1 text-white rounded bg-itana-red xs:p-1 sm:p-2 md:p-4 sm:visible hover:shadow-xl">
          <span className="">
            <svg
              role="img"
              aria-label="Arrow up"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M5 15l7-7 7 7" />
            </svg>
          </span>
        </div>
      </ScrollToTop>
      <Footer />
    </div>
  )
}
