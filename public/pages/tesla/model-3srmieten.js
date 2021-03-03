import { Link, graphql } from 'gatsby'
import TeslaQuickLinks from '@/ui/TeslaQuickLinks'
import AngeboteT3 from '@/ui/AngeboteHKL'
import CTA from '@/ui/CTA'
import Head from 'next/head'
import Img from 'gatsby-image'

import SEO from '@/ui/seo'

export const query = graphql`
  query {
    Tesla3SR: file(relativePath: { eq: "cards/tesla-3-sr.png" }) {
      id
      childImageSharp {
        fluid(maxWidth: 1000, maxHeight: 600, quality: 80, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    PreisHKL: hklJson(
      Typ: { eq: "1" }
      Art: { eq: "L" }
      Tarif: { eq: "Monat" }
      Beschreibung: { eq: "30 Tage" }
    ) {
      Preis_pro_Tag
    }
  }
`

function TeslaModel3SRPage ({ data }) {
  return (
    <div>
      <SEO
        title='Tesla Model 3 SR+ mieten in Stuttgart | 31,63 € / Tag für 30 Tage'
        description='Bestes Preis-Leistungs-Verhältnis ✓ E-Auto leihen | agiler Sportwagen ✓ Stuttgarter Autovermietung ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +49 711 49066 450'
      />
      <Head>
        <link
          rel='canonical'
          href='https://mobility.itana.de/tesla/model-3srmieten/'
        />
      </Head>
      <section>
        <h1 className='text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10'>
          Tesla Model 3 SR+ mieten - Leichten und agilen Sportwagen fahren
        </h1>

        <div className='max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl'>
          <div className='mx-auto'>
            <div className='relative'>
              <div>
                <Link
                  to='#tesla-standard-range-plus'
                  title='Tesla Model 3 Standard Range Plus'
                  aria-label='Tesla Model 3 Standard Range Plus'
                >
                  <Img
                    objectFit='cover'
                    objectPosition='50% 50%'
                    className='z-0 mx-auto mt-4 h-96 rounded'
                    fluid={data.Tesla3SR.childImageSharp.fluid}
                    alt='Tesla Model 3 Standard Range Plus mieten'
                  />
                  <span className='absolute top-2 left-2 text-white text-md lg:text-2xl lg:bottom-2 lg:right-2'>
                    Standard Range Plus ab {data.PreisHKL.Preis_pro_Tag}
                    €/Tag <br /> im Monat
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h2>Wie viel kostet es, einen Tesla Model 3 SR+ zu mieten?</h2>
        </div>
      </section>
      <section className='p-4 bg-gray-100 rounded border border-gray-400 sm:mt-8 md:mt-12'>
        <a
          href='#tesla-standard-range-plus'
          role='button'
          id='tesla-standard-range-plus'
          label='Tesla Model 3 Stanard Range Plus'
        >
          <h2>Tesla Model 3 Standard Range Plus</h2>
        </a>
        <AngeboteT3 />
        <CTA
          data_cy='TeslaModel3StandardRangePlusMieten'
          fillBG='true'
          fullWidth='true'
          title='Tesla Model 3 Standard Range Plus mieten'
          link='https://reservation.itana.de/#tabs-fzggruppe-4'
        />
      </section>
      <TeslaQuickLinks />
      <div className='my-24 mx-auto'>
        <div className='mx-auto prose lg:prose-md'>
          <h2>
            Was sind die Unterschiede zwischen dem Model 3 Performance und dem
            Model 3 SR+?
          </h2>
          <p>
            Auf den ersten Blick kann man die Modelle durch die Felgen
            unterscheiden. Beim SR+ sind die Räder mit den Felgen mehr verdeckt
            und dunkler.
            <br />
            Der Standard Range Plus braucht laut Herstellerangaben von 0 auf 100
            km/h 5,6 Sekunden, im Vergleich dazu braucht der Performance 3,4
            Sekunden. <br />
            Wir als Autovermietung in Stuttgart empfehlen Dir, den SR+ länger zu
            mieten, dadurch ist der Preis geringer und Du kannst alles in Ruhe
            ausprobieren. Der Fahrspaß wird Dir nicht entgehen, der SR+ hat
            nicht so viel Leistung wie der Performance, ist aber leichter und
            agiler. Wir sind auf Deine Meinung gespannt.
          </p>
        </div>
      </div>

      <div className='mx-auto mt-8 prose lg:prose-md'>
        <h2> Du möchtest günstig einen Tesla mieten?</h2>
        <p>
          Dann bist Du bei uns richtig. Vergleiche die Preise und prüfe
          eventuelle Zusatzkosten bei anderen Anbietern. Unsere Preise sind
          transparent, d.h. es kommen keine Zusatzkosten dazu, außer Du fährst
          mehr Kilometer als vereinbart. Du kannst uns anrufen oder über die
          Website einen Buchungszeitraum aussuchen und verbindlich buchen.
        </p>
      </div>
    </div>
  )
}

export default TeslaModel3SRPage
