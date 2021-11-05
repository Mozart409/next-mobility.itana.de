import Layout from 'components/Layout'
import '../lib/global.css'
import 'public/fonts/inter.css'
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
