import '../lib/global.css';

import Layout from 'components/Layout';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {useEffect} from 'react';
import toast, {Toaster} from 'react-hot-toast';

export default function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      // @ts-ignore
      window.workbox !== undefined
    ) {
      // @ts-ignore
      const wb = window.workbox;
      // Add event listeners to handle any of PWA lifecycle event
      // https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-window.Workbox#events
      wb.addEventListener('installed', event => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('controlling', event => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      wb.addEventListener('activated', event => {
        console.log(`Event ${event.type} is triggered.`);
        console.log(event);
      });

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = event => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.

        const handleReload = t => {
          toast.dismiss(t.id);
          wb.addEventListener('controlling', event => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        };

        toast.custom(
          t => (
            <>
              <div
                className={`${
                  t.visible ? 'animate-enter' : 'animate-leave'
                } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
              >
                <div className="flex border-r border-gray-200">
                  <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-itana-red/40 hover:text-itana-red focus:outline-none focus:ring-2 focus:ring-itana-red"
                  >
                    Close
                  </button>
                </div>
                <div className="flex-1 w-0 p-4">
                  <div className="flex items-start">
                    {/* <div className='flex-shrink-0 pt-0.5'>
								<img
								  className='h-10 w-10 rounded-full'
								  src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
								  alt=''
								/>
							  </div> */}
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-900 text-center">
                        A new version is available
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex border-l border-gray-200">
                  <button
                    onClick={handleReload}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-itana-red/40 hover:text-itana-red focus:outline-none focus:ring-2 focus:ring-itana-red"
                  >
                    Reload
                  </button>
                </div>
              </div>
            </>
          ),
          {
            duration: 1000 * 60 * 3,
            position: 'top-center',
            icon: '👏',
          }
        );
      };

      wb.addEventListener('waiting', promptNewVersionAvailable);

      // ISSUE - this is not working as expected, why?
      // I could only make message event listenser work when I manually add this listenser into sw.js file

      wb.addEventListener(
        'message',
        event => {
          if (event.origin !== 'https://mobility.itana.de') {
            return;
          }

          console.log(`Event ${event.type} is triggered.`);
          console.log(event);
        },
        false
      );

      /*  Wb.addEventListener("message", (event) => {
        if (event.origin !== "https://mobility.itana.de")
          return;

        // ...
      }, false); */

      wb.addEventListener(
        'redundant',
        event => {
          if (event.origin !== 'https://mobility.itana.de') {
            return;
          }

          console.log(`Event ${event.type} is triggered.`);
          console.log(event);
        },
        false
      );

      /*
      Wb.addEventListener('externalinstalled', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      wb.addEventListener('externalactivated', event => {
        console.log(`Event ${event.type} is triggered.`)
        console.log(event)
      })
      */

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);

  return (
    <Layout>
      <Toaster />
      <Component {...pageProps} />
    </Layout>
  );
}
