import Breadcrum from '@/ui/Breadcrum'
import CTA from 'pages/tesla/node_modules/@/ui/CTA'
import Head from 'next/head'
import Img from 'pages/tesla/node_modules/gatsby-image'

import SEO from '@/ui/seo'

export const query = graphql`
  query {
    Banner: file(relativePath: { eq: "cards/schulung.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default function schulungElektromobilität ({ data }) {
  return (
    <div>
      <SEO
        title='Schulung Elektromobilität - Itana GmbH'
        description='Wir beraten Sie gerne - rufen Sie jetzt an!'
      />
      <Head>
        <link
          rel='canonical'
          href='https://mobility.itana.de/schulung-elektromobilitaet/'
        />
      </Head>
      <Breadcrum />
      <div className='max-w-7xl prose sm:px-6 lg:px-8 lg:prose-md'>
        {/* <p className='text-sm leading-5 text-gray-500'>
          <time dateTime='2020-05-4'>Mai 4, 2020</time>
        </p> */}
        <h1>Schulung Elektromobilität</h1>

        <Img
          objectFit='cover'
          objectPosition='50% 50%'
          className='h-56 rounded'
          fluid={data.Banner.childImageSharp.fluid}
          alt='Schulung'
        />

        <h3>
          Wir bieten intensive Schulungen und Vorträge für Autoverkäufer im
          Bereich Elektromobilität an
        </h3>
        <p>
          Kernpunkt ist die Wissensvermittlung für die Nutzenargumentation, um
          die Kundenvorteile klar herauszustellen. Ziel der Schulung ist es, ein
          Interessent mit allen wichtigen Informationen zur E-Mobilität zu
          versorgen und zu überzeugen. Sie werden sich zukünftig auf Fragen
          Ihrer Kunden bezügliche der Elektromobilität freuen. Mieten Sie einen
          Tesla bei uns profitieren Sie von unserer Art die Dinge einfach zu
          erklären. Sie werden nicht im Handbuch nachlesen müssen und vor
          Fahrtantritt alle Fragen beantwortet haben.
        </p>
        <CTA
          fillBG='true'
          fullWidth='true'
          title='Jetzt anrufen und Termin vereinbaren'
          link='tel:+49 711 49066 450'
        />
      </div>
    </div>
  )
}
