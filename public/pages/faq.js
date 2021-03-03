import { Collapser, Panel, Trigger } from 'react-collapser'
import Head from 'next/head'
import SEO from '@/ui/seo'
import GoogleBewertungen from '@/ui/GoogleBewertungen'
import CTA from '@/ui/CTA'

function Collapse () {
  return (
    <div className='py-6 px-4 mx-auto max-w-5xl sm:py-8 sm:px-6 lg:px-8'>
      <div className=''>
        <h1 className='text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10'>
          Häufig gestellte Fragen
        </h1>
        <h2>Wie, wo und warum? </h2>
        <div className='pt-6 mt-6 text-lg leading-7 border-t-2 border-gray-200 cursor-pointer'>
          <Collapser>
            <Trigger className='mt-2 Trigger'>
              <svg
                className='inline mr-2 Chevron'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 5l7 7-7 7'
                />
              </svg>
              <span className='inline font-medium text-gray-900'>
                Wie kann ich einen Tesla mieten?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Klicken Sie auf einen roten Button „Buchungsanfrage“ oder "Zur
                Buchung". Oder klicken Sie direkt beim Auto auf den Button
                „Jetzt unverbindlich anfragen“.{' '}
              </p>

              <a href='https://reservation.itana.de/'>
                <CTA title='Zur Buchung' fillBG='true' />
              </a>

              <p className='mb-4 text-base leading-6 text-gray-500'>
                Nach Wahl des Autos, Abhol- und Rückgabe-Datum senden Sie die
                Anfrage ab. Wir nehmen umgehend mit Ihnen Kontakt auf. Bei
                Abholung erklären wir Ihnen alles, was Sie für eine entspannte
                Reise wissen müssen. Planen Sie dazu ca. ½ - 1 Stunde ein, je
                nach Vorkenntnissen. Gerne helfen wir Ihnen beim Verbinden Ihres
                Smartphones mit dem gemieteten Auto.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Warum sollte ich bei Itana einen Tesla mieten?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Weil wir Ihnen das <b> Rundum-Sorglos Paket </b> zum{' '}
                <b> Top-Preis </b> anbieten. <b /> <b />
                Sie bekommen eine Einweisung von ca. 1/2 - 1 Stunde in der{' '}
                <b>alle Ihre Fragen geklärt</b> werden. Unsere Kunden sind von
                unserem <b>Service</b> und unserem <b>Know-How</b> begeistert.
              </p>

              <GoogleBewertungen />
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Gibt es eine Kaution? Muss ich Bar-Geld mitbringen?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>Nein.</p>
            </Panel>

            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Kann ich die Mietdauer verlängern?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Ja. Kontaktieren Sie uns und wir versuchen unser Möglichstes,
                die Mietdauer zu verlängern.{' '}
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Muss ich den Mietwagen zu 100% geladen wieder abgeben?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Nein, wir bitten jedoch um eine Restladung von 50%, nach
                Abstimmung mit uns auch weniger.{' '}
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Was ist, wenn das Elektroauto einen Schaden hat?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Bei der Übergabe schauen wir das E-Auto gemeinsam an und
                dokumentieren alle Schäden.{' '}
              </p>
            </Panel>
          </Collapser>
        </div>
      </div>
    </div>
  )
}

function CollapseVersicherung () {
  return (
    <div className='py-6 px-4 mx-auto max-w-5xl sm:py-8 sm:px-6 lg:px-8'>
      <div className=''>
        <h2>Versicherung </h2>
        <div className='pt-6 mt-6 text-lg leading-7 border-t-2 border-gray-200 cursor-pointer'>
          <Collapser>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wie bin ich versichert?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Sie können zwischen einer Vollkasko-Versicherung mit
                Selbstbeteiligung von 2500€ / 1000€ oder 500€ wählen. Je nach
                Wunsch kann also die Haftungsreduzierung eingeschränkt werden.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Ist der Track Modus erlaubt?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>Nein.</p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Ab wie vielen Jahren darf man den Tesla ausleihen?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Ab 28 Jahren.
              </p>
            </Panel>

            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Darf ich mit dem Tesla ins Ausland fahren?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Auf Anfrage ist die Fahrt ins Ausland möglich.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wie kann ich erkennen, welche Bereifung (Winter-/Sommerreifen)
                mein Mietfahrzeug hat?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Wir übergeben Ihnen das Fahrzeug stets mit saisonal geeigneter
                Bereifung, d.h. sie müssen bei uns auch nicht mit Winter- oder
                Ganzjahresreifen durch den Sommer fahren – versprochen! Bei
                Langzeitmiete tauschen wir für Sie die Räder zum geeigneten
                Zeitpunkt.
              </p>
            </Panel>
          </Collapser>
        </div>
      </div>
    </div>
  )
}

function CollapseLeben () {
  return (
    <div className='py-6 px-4 mx-auto max-w-5xl sm:py-8 sm:px-6 lg:px-8'>
      <div className=''>
        <h2>Rund ums Leben </h2>
        <div className='pt-6 mt-6 text-lg leading-7 border-t-2 border-gray-200 cursor-pointer'>
          <Collapser>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Mit dem gemieteten Tesla in den Urlaub fahren?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Warum nicht mit einem Tesla in den Urlaub fahren? Mieten Sie
                Ihren Wunsch-Tesla und probieren Sie in Ruhe alles aus. Sie
                werden schnell feststellen, dass es wirklich Spaß macht,
                zeitgemäß und sportlich zu reisen.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Darf ich meinen Hund mitnehmen?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Hunde oder Katzen müssen in der Transportbox gesichert werden.
                Bei starker Verunreinigung mit Tierhaaren müssen wir wegen
                Allergiegefahr eine Reinigungsgebühr von 100€ in Rechnung
                stellen.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Kann ich in jeder Innenstadt kostenlos parken?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Nein, hier gibt es keine einheitliche Linie. Bitte informieren
                Sie sich entsprechend bei Ihrer Stadt. Derzeit frei: Stuttgart,
                Waiblingen, Ludwigsburg, Esslingen, Schwäbisch-Gmünd, Böblingen,
                Sindelfingen, Ettlingen, Baden-Baden, Landau in der Pfalz.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Darf ich im Auto rauchen?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>Nein.</p>
            </Panel>
          </Collapser>
        </div>
      </div>
    </div>
  )
}

function CollapseAufladen () {
  return (
    <div className='py-6 px-4 mx-auto max-w-5xl sm:py-8 sm:px-6 lg:px-8'>
      <div className=''>
        <h2>Das Elektroauto aufladen </h2>
        <div className='pt-6 mt-6 text-lg leading-7 border-t-2 border-gray-200 cursor-pointer'>
          <Collapser>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wo und wie lade ich den Tesla auf?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Aufladen können Sie den Tesla <b>überall</b>, z.B. beim Parken,
                am Arbeitsplatz, unterwegs oder zu Hause an der
                Schuko-Steckdose. Tesla zeigt Ihnen die <b>Verfügbarkeit</b> von
                Superchargern direkt im Display des Fahrzeugs an. Drittanbieter
                zeigen die Verfügbarkeit leider nur teilweise in deren
                Smartphone Apps an.{' '}
                <b>Sollten Sie Fragen zum Thema Aufladen haben </b>, sprechen
                Sie uns gerne an.
              </p>
              <table className='table-auto'>
                <thead>
                  <tr>
                    <th className='py-2 px-4'>Typ</th>
                    <th className='py-2 px-4'>Ladekapazität</th>
                    <th className='py-2 px-4'>Dauer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='py-2 px-4 border'>
                      Zu Hause an der Schuko Steckdose{' '}
                    </td>
                    <td className='py-2 px-4 border'>
                      hängt vom Ladeanschluss, dem Fahrzeug und der Stromquelle
                      ab
                    </td>
                    <td className='py-2 px-4 border'>
                      Model 3: 24h von ganz leer bis ganz voll
                    </td>
                  </tr>
                  <tr className='bg-gray-100'>
                    <td className='py-2 px-4 border'>
                      Öffentliche AC-Ladestationen - Typ 2 Ladekabel
                    </td>
                    <td className='py-2 px-4 border'>11 kW</td>
                    <td className='py-2 px-4 border'>
                      Model 3 aufladen: 6 Stunden
                    </td>
                  </tr>
                  <tr>
                    <td className='py-2 px-4 border'>
                      {' '}
                      Triple Charger beim Einkaufszentrum
                    </td>
                    <td className='py-2 px-4 border'>45 kW</td>
                    <td className='py-2 px-4 border'>
                      Model 3 aufladen: 1,5 Stunden
                    </td>
                  </tr>
                  <tr className='bg-gray-100'>
                    <td className='py-2 px-4 border'>Tesla Supercharger </td>
                    <td className='py-2 px-4 border'>&gt; 100 kW</td>
                    <td className='py-2 px-4 border'>
                      Model 3 aufladen: 20-30 Minuten, bis 75%
                    </td>
                  </tr>
                </tbody>
              </table>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wie weit kann ich mit meinem Tesla fahren?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Mit dem Tesla Model X haben Sie eine von Reichweite: 565 km
                (NEFZ) und mit dem Tesla Model 3 eine von Reichweite: 530 km
                (WLTP). Unsere Erfahrungen zeigen, dass bei einer
                durchschnittlichen Fahrweise die Reichweite darunter liegt.
              </p>
            </Panel>

            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Welche Kraftstoffkosten entstehen für 100 km Fahrt
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Strompreise an öffentlichen Ladesäulen variieren sehr stark. Bei
                der Nutzung von Haushaltsstrom sollte man von rund 5 Euro je
                100km für den Hyundai Kona bzw. das Tesla Model 3 ausgehen,
                sowie von rund 7 Euro für das Model X.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Sind sogenannte ChargingCards im Mietpreis enthalten?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Nein, wir beraten Sie jedoch gerne im Vorfeld der Anmietung über
                die gängigsten Anbieter und unterstützen Sie bei der
                Beschaffung, sowie bei der Einrichtung und Verwendung
                entsprechender Smartphone-Apps.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wie kann ich die Reichweite aktueller Elektrofahrzeuge
                einschätzen?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Die tatsächliche Reichweite kann von den offiziellen Angaben des
                Herstellers abweichen. Die Reichweite ist in erster Linie
                abhängig von Faktoren wie der Temperatur und dem Wetter. Die
                individuelle Fahrweise und das Streckenprofil sind ebenfalls
                relevante Faktoren und haben Auswirkung auf die Reichweite. Die
                Reichweite ist am höchsten bei moderater, vorausschauender
                Fahrweise. Bei vernünftiger und doch zügiger Fahrweise ohne
                Vollgasetappen sind mit einer vollen Ladung Distanzen von 300km
                Autobahn oder 400km Landstraße realisierbar. Da unsere Fahrzeuge
                sehr leistungsstark, und gleichzeitig effizient sind hat der
                Fahrer den Haupteinfluss auf die Reichweite: So kann die
                Reichweite mit Dauervollgas deutlich unter 200 km reduziert
                werden, oder auch im Sommer bei gemütlicher Fahrweise gestreckt
                werden.
              </p>
            </Panel>

            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Wie ist der Verlauf der Ladekurve?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                {' '}
                Startet das Laden, lädt die Batterie anfangs sehr schnell auf.
                Desto voller der Akku ist, desto länger dauert es. Eine gute
                Erklärung mit technischen Hintergründen gibt es von{' '}
                <a
                  rel='noopener noreferrer'
                  target='_blank'
                  className='font-bold text-itana-red'
                  href='https://www.youtube.com/watch?v=u606PMue3j0'
                >
                  Horst Lüning
                </a>
                {'. '}
                <br />
                Übrigens: Pausen erhöhen die Fahrsicherheit und schonen den
                Rücken.
              </p>
            </Panel>
            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Verlieren die Akkus im Lauf der Zeit an Leistung?{' '}
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Tesla hat sehr viel Entwicklungsarbeit in die Batterie gesteckt.
                Es kann davon ausgegangen werden, dass der gesamte elektrische
                Antriebsstrang langlebiger ist als der eines Verbrenners. Ein
                Leistungsverlust ist daher wesentlich geringer als bei
                Smartphones. Nach 8 Jahren sollten bei üblicher Nutzung noch
                mehr als 85% zur Verfügung stehen.
              </p>
            </Panel>

            <Trigger className='mt-2 Trigger'>
              <FaChevronRight className='inline mr-2 Chevron' />
              <span className='inline font-medium text-gray-900'>
                Schaffe ich es mit drei Pausen von München nach Hamburg zu
                fahren?
              </span>
            </Trigger>
            <Panel>
              <p className='mb-4 text-base leading-6 text-gray-500'>
                Ja. Planen Sie ihre Stopps am Tesla-Supercharger ein, entspannen
                Sie sich, tanken Sie Kraft oder gehen Sie etwas essen. In der
                Zwischenzeit ist der Akku bei ca. 65% - 75%, was völlig
                ausreicht.{' '}
              </p>
            </Panel>
          </Collapser>
        </div>
      </div>
    </div>
  )
}

function FAQPage () {
  return (
    <div>
      <SEO
        title='FAQ | Tesla mieten - Itana GmbH'
        description='Was muss ich beachten wenn ich ein Elektroauto (Tesla) miete? Welchen Service gibt es?'
      />
      <Head>
        <meta charSet='utf-8' />
        <link rel='canonical' href='https://mobility.itana.de/faq/' />

        <script type='application/ld+json'>
          {`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Wie kann ich einen Tesla mieten?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Klicken Sie auf einen roten Button „Buchungsanfrage“ oder „Zur Buchung“. Oder klicken Sie direkt beim Auto auf den Button „Jetzt unverbindlich anfragen“. Nach Wahl des Autos, Abhol- und Rückgabe-Datum senden Sie die Anfrage ab. Wir nehmen umgehend mit Ihnen Kontakt auf. Bei Abholung erklären wir Ihnen alles, was Sie für eine entspannte Reise wissen müssen. Planen Sie dazu ca. ½ - 1 Stunde ein, je nach Vorkenntnissen. Gerne helfen wir Ihnen beim Verbinden Ihres Smartphones mit dem gemieteten Auto."
    }
  },{
    "@type": "Question",
    "name": "Warum sollte ich bei Itana einen Tesla mieten?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Weil wir Ihnen das Rundum-Sorglos Paket zum Top-Preis anbieten. Sie bekommen eine Einweisung von ca. 1/2 - 1 Stunde in der alle Ihre Fragen geklärt werden. Unsere Kunden sind von unserem Service und unserem Know-How begeistert."
    }
  },{
    "@type": "Question",
    "name": "Gibt es eine Kaution? Muss ich Bar-Geld mitbringen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein."
    }
  },{
    "@type": "Question",
    "name": "Wo und wie lade ich den Tesla auf?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Aufladen können Sie den Tesla überall, z.B. beim Parken, am Arbeitsplatz, unterwegs oder zu Hause an der Schuko-Steckdose. Tesla zeigt Ihnen die Verfügbarkeit von Superchargern direkt im Display des Fahrzeugs an. Drittanbieter zeigen die Verfügbarkeit leider nur teilweise in deren Smartphone Apps an. Sollten Sie Fragen zum Thema Aufladen haben , sprechen Sie uns gerne an."
    }
  },{
    "@type": "Question",
    "name": "Wie weit kann ich mit meinem Tesla fahren?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Mit dem Tesla Model X haben Sie eine von Reichweite: 565 km (NEFZ) und mit dem Tesla Model 3 eine von Reichweite: 530 km (WLTP)."
    }
  },{
    "@type": "Question",
    "name": "Welche Kraftstoffkosten entstehen für 100 km Fahrt",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Strompreise an öffentlichen Ladesäulen variieren sehr stark. Bei der Nutzung von Haushaltsstrom sollte man von rund 5 Euro je 100km für den Hyundai Kona bzw. das Tesla Model 3 ausgehen, sowie von rund 7 Euro für das Model X."
    }
  },{
    "@type": "Question",
    "name": "Sind sogenannte ChargingCards im Mietpreis enthalten?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein, wir beraten Sie jedoch gerne im Vorfeld der Anmietung über die gängigsten Anbieter und unterstützen Sie bei der Beschaffung, sowie bei der Einrichtung und Verwendung entsprechender Smartphone-Apps."
    }
  },{
    "@type": "Question",
    "name": "Wie kann ich die Reichweite aktueller Elektrofahrzeuge einschätzen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Die Reichweite ist in erster Linie abhängig von Faktoren wie der Temperatur und dem Wetter. Die individuelle Fahrweise und das Streckenprofil sind ebenfalls relevante Faktoren und haben Auswirkung auf die Reichweite. Die Reichweite ist am höchsten bei moderater, vorausschauender Fahrweise. Bei vernünftiger und doch zügiger Fahrweise ohne Vollgasetappen sind mit einer vollen Ladung Distanzen von 300km Autobahn oder 400km Landstraße realisierbar."
    }
  },{
    "@type": "Question",
    "name": "Wie ist der Verlauf der Ladekurve?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Startet das Laden, lädt die Batterie anfangs sehr schnell auf. Desto voller der Akku ist, desto länger dauert es. Eine gute Erklärung mit technischen Hintergründen gibt es von Horst Lüning.
Übrigens: Pausen erhöhen die Fahrsicherheit und schonen den Rücken."
    }
  },{
    "@type": "Question",
    "name": "Verlieren die Akkus im Lauf der Zeit an Leistung?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Tesla hat sehr viel Entwicklungsarbeit in die Batterie gesteckt. Es kann davon ausgegangen werden, dass der gesamte elektrische Antriebsstrang langlebiger ist als der eines Verbrenners. Ein Leistungsverlust ist daher wesentlich geringer als bei Smartphones. Nach 8 Jahren sollten bei üblicher Nutzung noch mehr als 85% zur Verfügung stehen."
    }
  },{
    "@type": "Question",
    "name": "Schaffe ich es mit drei Pausen von München nach Hamburg zu fahren?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ja. Planen Sie ihre Stopps am Tesla-Supercharger ein, entspannen Sie sich, tanken Sie Kraft oder gehen Sie etwas essen. In der Zwischenzeit ist der Akku bei ca. 70% - 75%, was völlig ausreicht."
    }
  },{
    "@type": "Question",
    "name": "Kann ich die Mietdauer verlängern?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ja. Kontaktieren Sie uns und wir versuchen unser Möglichstes, die Mietdauer zu verlängern."
    }
  },{
    "@type": "Question",
    "name": "Muss ich den Mietwagen zu 100% geladen wieder abgeben?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein, wir bitten jedoch um eine Restladung von 50%, nach Abstimmung mit uns auch weniger."
    }
  },{
    "@type": "Question",
    "name": "Wie bin ich versichert?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Sie können zwischen einer Vollkasko-Versicherung mit Selbstbeteiligung von 2500€ / 1000€ oder 500€ wählen."
    }
  },{
    "@type": "Question",
    "name": "Ist der Track Modus erlaubt?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein."
    }
  },{
    "@type": "Question",
    "name": "Ab wie vielen Jahren darf man den Tesla ausleihen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Ab 28 Jahren."
    }
  },{
    "@type": "Question",
    "name": "Darf ich mit dem Tesla ins Ausland fahren?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Auf Anfrage ist die Fahrt ins Ausland möglich."
    }
  },{
    "@type": "Question",
    "name": "Wie kann ich erkennen, welche Bereifung (Winter-/Sommerreifen) mein Mietfahrzeug hat?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Wir übergeben Ihnen das Fahrzeug stets mit saisonal geeigneter Bereifung, d.h. sie müssen bei uns auch nicht mit Winter- oder Ganzjahresreifen durch den Sommer fahren – versprochen! Bei Langzeitmiete tauschen wir für Sie die Räder zum geeigneten Zeitpunkt."
    }
  },{
    "@type": "Question",
    "name": "Mit dem gemieteten Tesla in den Urlaub fahren?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Warum nicht mit einem Tesla in den Urlaub fahren? Mieten Sie Ihren Wunsch-Tesla und probieren Sie in Ruhe alles aus. Sie werden schnell feststellen, dass es wirklich Spaß macht, zeitgemäß und sportlich zu reisen."
    }
  },{
    "@type": "Question",
    "name": "Darf ich meinen Hund mitnehmen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Hunde oder Katzen müssen in der Transportbox gesichert werden. Bei starker Verunreinigung mit Tierhaaren müssen wir wegen Allergiegefahr eine Reinigungsgebühr von 100€ in Rechnung stellen."
    }
  },{
    "@type": "Question",
    "name": "Kann ich in jeder Innenstadt kostenlos parken?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein, hier gibt es keine einheitliche Linie. Bitte informieren Sie sich entsprechend bei Ihrer Stadt. Derzeit frei: Stuttgart, Waiblingen, Ludwigsburg, Esslingen, Schwäbisch-Gmünd, Böblingen, Sindelfingen, Ettlingen, Baden-Baden, Landau in der Pfalz."
    }
  },{
    "@type": "Question",
    "name": "Darf ich im Auto rauchen?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Nein."
    }
  }]
}
`}
        </script>
      </Head>
      <Collapse />
      <CollapseAufladen />
      <CollapseVersicherung />
      <CollapseLeben />
    </div>
  )
}

export default FAQPage
