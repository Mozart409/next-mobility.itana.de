import { helmetJsonLdProp } from 'react-schemaorg'
import Breadcrum from '@/ui/Breadcrum'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import SEO from '@/ui/seo'
import CTA from '@/ui/CTA'
import {
  getT3SRDataByLowestPrice,
  getTXDataByLowestPrice,
  getT3PDataByLowestPrice
} from 'lib/api'

const InfoBanner = () => (
  <div className="bg-gray-50 border-l-4 border-itana-red">
    <div className="flex">
      <div className="my-auto ml-2 w-6 h-6 text-itana-red">
        <svg
          aria-label="Info Icon"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <p className="ml-2">Unsere Preise beinhalten keine versteckten Kosten</p>
    </div>
  </div>
)

export default function langzeitmeitePage({ t3pPrice, txlPrice, t3srPrice }) {
  return (
    <div>
      <SEO
        title="Tesla Langzeitmiete | ab 57€/Tag im Monat | Autovermietung"
        description="Elektroauto | Tesla Langzeitmiete &#x2705; Bester Preis &#x2705; Super Service &#x2705; Du musst Dich um nichts kümmern &#x2705; Dein zukunftsweisender Auftritt &#x1F680;"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla-langzeitmiete/"
        />
      </Head>
      <Head
        script={[
          helmetJsonLdProp({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            url: 'https://mobility.itana.de/tesla-langzeitmiete',
            inLanguage: 'de-DE',
            image: 'https://mobility.itana.de/news/tesla-model-x.jpg',
            isFamilyFriendly: 'true',
            copyrightYear: '2021',
            headline: 'Tesla Langzeitmiete',
            articleBody:
              'Vorteile der Tesla Langzeitmiete gegenüber dem Leasing - viel mehr Flexibilität - kürzere Vertragsbindung - kurzfristigere Verfügbarkeit - fairer Preis und gute Leistung. Das klassische Leasing fordert einen Mietzeitraum von mindestens zwei Jahren! Bei der Itana GmbH ist der Mietzeitraum flexibel. Kontaktiere uns jetzt, gerne gehen wir auf Deine persönlichen Wünsche und Bedürfnisse ein. Vorab kannst Du in unseren FAQs stöbern.',
            contentLocation: {
              '@type': 'Place',
              name: 'Maulbronner Weg 33, 71706 Markgröningen, Germany'
            }
          })
        ]}
      />
      <Breadcrum />
      <div className="max-w-7xl sm:px-6 lg:px-8 prose lg:prose-md">
        {/* <p className='text-sm leading-5 text-gray-500'>
          <time dateTime='2020-04-17'>August 03, 2020</time>
        </p> */}
        <h1>Tesla Langzeitmiete</h1>
        <p>Brauchst Du geschäftlich ein zukunftsweisendes, besonderes Auto?</p>

        <Image
          className="mx-auto h-56 rounded"
          alt="Tesla Model X"
          src="/images/news/tesla-model-x.jpg"
          height="600"
          width="1000"
        />

        <div className="grid grid-cols-1 gap-x-8 lg:grid-cols-2">
          <div>
            <h2>Vorteile der Tesla Langzeitmiete gegenüber dem Leasing</h2>

            <ul>
              <li>viel mehr Flexibilität</li>
              <li>kürzere Vertragsbindung</li>
              <li>kurzfristigere Verfügbarkeit</li>
              <li>fairer Preis und gute Leistung</li>
            </ul>
            <p>
              Das <b>klassische Leasing</b> fordert einen Mietzeitraum von
              <b>mindestens zwei Jahren!</b> Bei der Itana GmbH ist der
              Mietzeitraum flexibel.
              <Link
                passHref
                className="font-semibold text-itana-red"
                href="/kontakt/"
              >
                Kontaktiere uns jetzt,
              </Link>
              gerne gehen wir auf Deine persönlichen Wünsche und Bedürfnisse
              ein.
            </p>
            <p>
              Vorab kannst Du in unseren
              <Link
                passHref
                className="font-semibold text-itana-red"
                href="/faq/"
              >
                FAQs
              </Link>
              stöbern.
            </p>
          </div>
          <div>
            <h2>Empfehlungen</h2>
            <InfoBanner />
            <p>
              Langzeitmiete für das Model 3 Standard Range Plus :<b>31,63 € </b>{' '}
              / Tag bei 30 Tagen Miete, inklusive 2.000 Inklusivkilometer.
            </p>
            <Link
              passHref
              href="/tesla/model-3-mieten/#tesla-standard-range-plus"
              target="_blank"
              rel="noopener noreferrer"
              className="anfrage"
            >
              <CTA title="Tesla Model 3 SR+ mieten" fillBG="true" />
            </Link>
            <p>
              Langzeitmiete für das Model 3 Performance :<b>56,63 €</b> / Tag
              bei 30 Tagen Miete, inklusive 2.000 Inklusivkilometer.
            </p>
            <Link
              passHref
              href="/tesla/model-3-mieten/#tesla-performance"
              target="_blank"
              rel="noopener noreferrer"
              className="anfrage"
            >
              <CTA title="Tesla Model 3 mieten" />
            </Link>
            <p>
              Langzeitmiete für das Model X: <b>83,30 €</b> / Tag bei 30 Tagen
              Miete, inklusive 2.000 Inklusivkilometer.
            </p>
            <Link
              passHref
              href="/tesla/model-x-mieten/"
              target="_blank"
              rel="noopener noreferrer"
              className="anfrage"
            >
              <CTA title="Tesla Model X mieten" />
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 prose lg:prose-md">
        <h2>Was bedeutet die Langzeitmiete für Dein Unternehmen?</h2>
        <p>
          Unsere Langzeitmiete als Alternative zum eigenen Fuhrpark birgt den
          Vorteil, die <b>Kapitalbindung</b> zu umgehen. Wird ein Auto geleast
          oder gekauft, ist das Geld gebunden, das an anderer Stelle kurzfristig
          gebraucht werden könnte und dann fehlt. In den letzten Jahren
          <b>mieten Unternehmen</b> ihre <b>Firmenautos</b>. So kannst Du Deinen
          <b>Bedarf</b> an Fahrzeugen Deiner <b>Auftragslage anpassen</b>.
        </p>
        <ul className="list-inside">
          <li>monatlicher Fixpreis</li>
          <li>alle Kosten sind inklusive</li>
          <li>flexibel kündbar</li>
          <li>Kosten evt. als betriebliche Ausgaben abrechenbar</li>
          <li>keine Restwertbegleichung</li>
          <li>einfache Aufstockung Deines Fuhrparks</li>
        </ul>
        <p>
          Bei uns bekommst Du das Elektroauto zum <b>vereinbarten Preis</b>.
          Beim <b>Leasing</b> oder auch der <b>Fahrzeugfinanzierung</b> würden
          noch <b>zusätzliche Kosten</b> wie Inspektion, KFZ-Steuer etc.
          dazukommen. Daher prüfe, wer weitere Kosten übernimmt, bevor Du einen
          Vertrag schließt:
        </p>
        <ul className="list-inside">
          <li>Haftpflichtversicherung </li>
          <li>Vollkaskoversicherung </li>
          <li>KFZ-Steuer </li>
          <li>Wartung </li>
          <li>Hauptuntersuchung (HU)</li>
          <li>Reparaturen </li>
          <li>Reifen</li>
          <li>Steuer</li>
          <li>Zulassung </li>
        </ul>
      </div>
    </div>
  )
}

/* export async function getStaticProps(context) {
  const t3pPrice = await getT3PDataByLowestPrice('L', '30 Tage')
  const txlPrice = await getTXDataByLowestPrice('L', '30 Tage')
  const t3srPrice = await getT3SRDataByLowestPrice('L', '30 Tage')
  return {
    props: { t3pPrice, txlPrice, t3srPrice }
  }
} */
