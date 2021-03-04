import { setup, tw } from 'twind'
import twindConfig from '../twind.config'
import Layout from 'components/Layout'
import 'twind/shim'

import Head from 'next/head'
if (typeof window !== 'undefined') {
  setup(twindConfig)
}

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="global.css" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
