import Head from 'next/head'
import Img from 'pages/tesla/node_modules/gatsby-image'

import SEO from '@/ui/seo'

export const query = graphql`
  query {
    Supercharging: file(
      relativePath: {
        eq: "teslaX/Tesla-Model-X-supercharging-leonberg2652.jpg"
      }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Charging: file(
      relativePath: { eq: "teslaX/Tesla-Model-X-charging-screen.jpg" }
    ) {
      id
      childImageSharp {
        fluid(maxWidth: 400, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

function MobilityPage ({ data }) {
  return (
    <div>
      <SEO
        title='Tesla Supercharger Leonberg | Tesla mieten - Itana GmbH'
        description='Supercharger bei Stuttgart | Elektromobilität | Tesla mieten | Itana'
      />
      <Head>
        <link
          rel='canonical'
          href='https://mobility.itana.de/tesla-supercharger-leonberg/'
        />
      </Head>

      <h1>Tesla Supercharger - Erleben Sie Elektromobilität</h1>
      <h2>Mit einem Partner, der etwas davon versteht.</h2>
      <section>
        <figure>
          <Img
            objectFit='cover'
            objectPosition='50% 50%'
            className='my-8 mx-auto mt-4 h-64 rounded'
            fluid={data.Supercharging.childImageSharp.fluid}
            alt='Tesla Supercharging in Leonberg.'
          />
          <figcaption className='flex'>
            <div className='mt-4 italic text-gray-700'>
              <span>Tesla Supercharging in Leonberg.</span>
            </div>
          </figcaption>
        </figure>
        <div className='flex flex-wrap text-gray-900'>
          <div className='p-2 w-1/1 md:w-1/3'>
            <p>
              Elektromobilität ist, wie das Team der Itana GmbH sie versteht,
              auf Umweltfreundlichkeit und Nachhaltigkeit ausgelegt und wird in
              absehbarer Zeit zur Reduktion der Lärm- und Schadstoffbelastung
              beitragen. Diese zukunftsweisende Technologie unterscheidet sich
              in vielen Belangen von der konventionellen auf Verbrennungsmotoren
              basierenden Mobilität.
            </p>
            <p>
              Vom Prinzip jedoch, wird ebenso Energie benötigt mit der Fahrzeuge
              versorgt werden müssen. Ähnlich wie ein Fahrzeug mit Diesel- oder
              Benzinmotor muss von Zeit zu Zeit Energie getankt werden, um mobil
              zu bleiben. Moderne Echtzeitanzeigen mit Reichweitenprognosen und
              Berechnung des Energieverbrauchs unterstützen und entlasten den
              Fahrer — also kein Grund zur Reichweitenangst.
            </p>
          </div>
          <div className='w-1/2 p-2 md:w-1/3'>
            <p>
              Um die aktuelle, tatsächliche Reichweite richtig einschätzen zu
              können (z. B. Tesla Model X 100D) unterstützen unterschiedliche
              Anzeigen den Fahrer. Unabhängig vom Fahrzeugtyp oder Hersteller:
              Bei Fahrzeugen mit Navigationsoption können Sie während der Fahrt
              ganz komfortabel den Energieverbrauch zu Ihrem Fahrtziel in
              Echtzeit kontrollieren und kontinuierlich mit der ursprünglichen
              Schätzung vergleichen. Während Sie zu Ihren Ziel unterwegs sind,
              wird Ihnen der Energieverbrauch im Streckendiagramm angezeigt.
            </p>
          </div>
          <div className='w-1/2 p-2 md:w-1/3'>
            <p>
              Tesla-Fahrzeuge <b>helfen</b> Ihnen auch{' '}
              <b>bei der Suche der geeigneten Ladesäulen</b> und <b>zeigen</b>{' '}
              Ihnen u.a. die Lage und{' '}
              <b>Distanz bis zum nächsten Tesla-Supercharger</b> an – inkl. der
              zu erwartenden Restenergie bei aktueller Fahrweise und Routenwahl.
              Herstellerunabhängig gibt es inzwischen auch ein ganze Reihe von
              nützlichen Apps von Ladestromanbietern.
            </p>
            <figure>
              <Img
                objectFit='cover'
                objectPosition='50% 50%'
                fluid={data.Charging.childImageSharp.fluid}
                alt='Ladevorganganzeige'
                className='my-8 mx-auto w-64 rounded'
              />
              <figcaption className='flex'>
                <div className='mt-4 italic text-gray-700'>
                  <span>
                    Tesla Model X 100D Ladevorganganzeige (Tesla-Supercharger).
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-wrap'>
          <div className='p-2 w-1/1 md:w-1/2'>
            <p>
              Die{' '}
              <a
                href='https://www.tesla.com/de_DE/findus/location/supercharger/leonbergsupercharger'
                target='_blank'
                rel='noopener noreferrer'
                className='text-itana-red'
              >
                Tesla Supercharger in Leonberg
              </a>{' '}
              wurden 2018 um 20 Supercharger-Stationen (auch Stall genannt)
              erweitert.
            </p>
            <p>
              Ein kleiner Tipp: Die meisten Superchargerstationen haben Nummern
              wie z.B. 1A, 1B, 2A, 2B etc. Jede Nummer entspricht einer Einheit
              der Ladegeräte und teilt die Leistung zwischen den Ständen A und B
              auf. Dies geschieht ebenfalls in einer Prioritätsreihenfolge, so
              dass das erste angeschlossene Auto das meiste davon erhält und das
              zweite Auto weniger als 50%.
            </p>
          </div>

          <div className='p-2 w-1/1 md:w-1/2'>
            <p>
              Wenn also jemand bereits auf 3B auflädt und Sie auf 3A laden,
              erhalten Sie möglicherweise eine geringe Leistung. Doch ist der
              Tesla auf 3B fast aufgeladen, würden Sie mehr Leistung erhalten.
              Lösung:
            </p>
            <ul className='leading-6 list-disc list-inside text-gray-500 break-normal'>
              <li>Tesla an Charger anschließen </li>
              <li>2-3 Minuten warten </li>
              <li>Laderate überprüfen</li>
              <li>
                Falls die Laderate sehr niedrig ist, eine andere Ladestation
                ausprobieren
              </li>
            </ul>
            <p>
              Tesla Fahrer wünschen sich{' '}
              <a
                href='https://www.tesla.com/de_DE/findus/location/supercharger/leonbergsupercharger'
                target='_blank'
                rel='noopener noreferrer'
                className='text-itana-red'
              >
                eine Funktion
              </a>{' '}
              die genau das abbildet: Zeige mir den Supercharger mit der besten
              Ladeleistung.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MobilityPage
