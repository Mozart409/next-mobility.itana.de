import Footer from '../Footer'
import Header from './Header'

import Head from 'next/head'

import ScrollToTop from 'react-scroll-up'

import '../css/style.css'
import '../../static/fonts/inter.css'

function Layout ({ children }) {
  return (
    <div className='flex flex-col min-h-screen text-gray-900 '>
      <Head>
        <meta httpEquiv='content-type' content='text/html; charset=utf-8' />
        <meta name='robots' content='index,follow' />
        <meta name='HandheldFriendly' content='true' />
        <meta
          name='google-site-verification'
          content='y0fNm10Zw-mMjHsc7sW-SHicOMEldY3I6d2K4KGUBYY'
        />
        <script
          id='usercentrics-cmp'
          data-settings-id='oVM0OC3Mr'
          src='https://app.usercentrics.eu/browser-ui/latest/bundle.js'
        ></script>

        {/*  <script
          data-usercentrics='Google Tag Manager'
          type='text/plain'
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-K56QMGF');`
          }}
        />
        <script
          data-usercentrics='Google Analytics'
          type='text/plain'
          src='https://www.googletagmanager.com/gtag/js?id=G-0G43K9BEPW'
        ></script>
        <script
          data-usercentrics='Google Analytics'
          type='text/plain'
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-0G43K9BEPW');`
          }}
        /> */}
      </Head>
      <Header />

      <div id='main'>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-K56QMGF'
            height='0'
            width='0'
          ></iframe>
        </noscript>

        <main
          id='content'
          aria-label='main'
          role='main'
          className='flex-1 p-4 mx-auto w-full max-w-7xl md:px-8'
        >
          {children}
        </main>
      </div>

      <ScrollToTop showUnder={200}>
        <div className='invisible p-1 text-white rounded bg-itana-red xs:p-1 sm:p-2 md:p-4 sm:visible hover:shadow-xl'>
          <span className=''>
            <svg
              role='img'
              aria-label='Arrow up'
              fill='none'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              className='w-8 h-8'
            >
              <path d='M5 15l7-7 7 7' />
            </svg>
          </span>
        </div>
      </ScrollToTop>

      <Footer />
    </div>
  )
}

export default Layout
