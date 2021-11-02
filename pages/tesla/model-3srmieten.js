import TeslaQuickLinks from '@/ui/TeslaQuickLinks'

import CTA from '@/ui/CTA'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import SEO from '@/ui/seo'

import Preisliste from '@/ui/Preisliste'
import { getT3SRPDataByArt } from 'lib/api'

function TeslaModel3SRPage({ Kurzzeit, Langzeit, Mehrkilometer }) {
  return (
    <div>
      <SEO
        title="Tesla Model 3 SR+ mieten in Stuttgart | 31,63 € / Tag für 30 Tage"
        description="Bestes Preis-Leistungs-Verhältnis ✓ E-Auto leihen | agiler Sportwagen ✓ Stuttgarter Autovermietung ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +49 711 49066 450"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla/model-3srmieten/"
        />
      </Head>
      <section>
        <h1 className="text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Tesla Model 3 SR+ mieten - Leichten und agilen Sportwagen fahren
        </h1>

        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-auto">
            <div className="relative">
              <div>
                <Link
                  href="#tesla-standard-range-plus"
                  title="Tesla Model 3 Standard Range Plus"
                  aria-label="Tesla Model 3 Standard Range Plus"
                >
                  <Image
                    src="/images/cards/tesla-3-sr.png"
                    className="mx-auto mt-4 h-96 rounded"
                    alt="Tesla Model 3 Standard Range Plus mieten"
                    height="600"
                    width="1000"
                  />
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
      <section>
        <a
          href="#tesla-standard-range-plus"
          role="button"
          id="tesla-standard-range-plus"
          label="Tesla Model 3 Stanard Range Plus"
          data-cy="RentTesla3SR"
        >
          <h2>Tesla Model 3 Standard Range Plus</h2>
        </a>

        <Preisliste
          kurzzeit={Kurzzeit}
          langzeit={Langzeit}
          mehrkilometer={Mehrkilometer}
        />
        <CTA
          data_cy="TeslaModel3StandardRangePlusMieten"
          fillBG="true"
          fullWidth="true"
          title="Tesla Model 3 Standard Range Plus mieten"
          link="https://itana.rentware.io/"
        />
      </section>
      <TeslaQuickLinks />
      <div className="my-24 mx-auto">
        <div className="mx-auto prose lg:prose-md">
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

      <div className="mx-auto mt-8 prose lg:prose-md">
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

export async function getStaticProps(context) {
  const Kurzzeit = await getT3SRPDataByArt('K')
  const Langzeit = await getT3SRPDataByArt('L')
  const Mehrkilometer = await getT3SRPDataByArt('M')
  return {
    props: { Kurzzeit, Langzeit, Mehrkilometer }
  }
}

export default TeslaModel3SRPage
