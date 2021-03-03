import { setup, tw } from 'twind'
import twindConfig from '../twind.config'
import Layout from 'components/Layout'
import 'twind/shim'
if (typeof window !== 'undefined') {
  setup(twindConfig)
}

export default function MyApp ({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
