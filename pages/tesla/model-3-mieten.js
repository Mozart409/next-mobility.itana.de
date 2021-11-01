import TeslaQuickLinks from '@/ui/TeslaQuickLinks'

import CTA from '@/ui/CTA'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import SEO from '@/ui/seo'

import Preisliste from '@/ui/Preisliste'
import { getT3PDataByArt } from 'lib/api'

function TeslaModel3Page({ Kurzzeit, Langzeit, Mehrkilometer }) {
  return (
    <div>
      <SEO
        title="Tesla Model 3 mieten | Elektroauto mieten | Sportwagen mieten"
        description="Tesla Model 3 mieten ✓ viel Beschleunigungsspaß ✓ App-Zugang auf ihrem Smartphone ✓ Sportwagen mieten ✓ ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +49 711 49066 450"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla/model-3-mieten/"
        />
      </Head>
      <section>
        <h1 className="text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Tesla Model 3 mieten - Sportwagen genießen
        </h1>
        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-auto">
            <div className="relative">
              <div>
                <Link
                  href="#tesla-performance"
                  aria-label="Tesla Model 3 Performance"
                >
                  <Image
                    src="/images/cards/tesla-3-performance.png"
                    className="mx-auto mt-4 h-96 rounded"
                    alt="Tesla Model 3 mieten"
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
          <h2>
            Wie viel kostet es, einen Tesla Model 3 als Sportwagen zu mieten?
          </h2>
        </div>
      </section>
      <section>
        <a
          id="tesla-performance"
          href="#tesla-performance"
          role="button"
          label="Tesla Model 3 Performance"
        >
          <h2>Tesla Model 3 Performance</h2>
        </a>

        <Preisliste
          kurzzeit={Kurzzeit}
          langzeit={Langzeit}
          mehrkilometer={Mehrkilometer}
        />
        <CTA
          data_cy="TeslaModel3PerformanceMieten"
          fillBG="true"
          fullWidth="true"
          title="Tesla Model 3 Performance mieten"
          link="https://reservation.itana.de/#tabs-fzggruppe-4"
        />
      </section>
      <TeslaQuickLinks />
      <div className="my-24 mx-auto">
        <div className="mx-auto prose lg:prose-md">
          <h2>Bereit für eine Testfahrt mit einem Sportwagen?</h2>
          <p>
            Wer möchte hier nicht einen Tesla Model 3 mieten und eine Probefahrt
            unternehmen? Der Tesla Model 3 Performance beschleunigt von 0 auf
            100 km/h innerhalb von 3,4 Sekunden! Erlebe pure ökologische
            Elektromobilität mit Fahrspaß.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-8 prose lg:prose-md">
        <h2>Beschleunigung und Antrieb des Model 3 Performance </h2>
        <p>
          Es macht richtig Spaß, mit dem atemberaubenden Tesla Model 3 die
          unglaubliche Beschleunigung zu spüren und andere Autos mit viel mehr
          PS stehenzulassen. Das kann nur auf abgesperrtem Gelände, wie z.B. auf
          dem
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-itana-red"
            href="https://www.youtube.com/watch?v=GUdSP5WuU6c"
          >
            {' '}
            Drag Day Meinerzhagen{' '}
          </a>
          stattfinden. Im Video kommt die PS starke Corvette Z06 nicht
          hinterher. Dein Mitfahrer sollte den Kopf bei der Beschleunigung
          gerade halten! Auch beim täglichen Gebrauch ist es atemberaubend, wie
          der Mietwagen beschleunigt, und das bei traumhaft günstigen
          Stromkosten. Bei einer Normalladesäule (AC) kostet die kWh zwischen 30
          und 40 Cent. Am Supercharger ca. 33 Cent. Je nach Fahrstil und anderen
          Einflußfaktoren errechnet sich der Verbrauch.
        </p>
        <h2>Batterie </h2>
        <p>
          Der Akku des Teslas 3 besteht aus Panasonic 21700er
          Lithium-Ionen-Zellen. Diese sind nicht, wie manchmal behauptet,
          genauso wie die Verbraucher-Zellen, sie sind für die Nutzung in
          Elektrofahrzeugen optimiert. Es ist bekannt, dass Elon Musk gerne und
          viel experimentiert. So auch bei den Batterien. Dadurch gewann Tesla
          wichtige Erkenntnisse. Tesla ordnet die Batterien so an, dass ein
          Brand bei einem Elektroauto um den Faktor 10 unwahrscheinlicher ist,
          als bei einem Benziner.
          <br />
          Der Antriebsstrang liegt kompakt zwischen den Rädern und verbindet das
          Getriebe, den Elektromotor und den Wechselrichter. Die Bezeichnung
          &quot;D&quot; bedeutet Dualmotor und bezeichnet, dass zwei Motoren an
          den jeweiligen Fahrzeugachseln liegen. Je nachdem wie die Elektrik
          verbaut wird, kann mehr oder weniger Leistung aus dem Motor abgerufen
          werden.
        </p>

        <h2>Rückwärtsfahren </h2>
        <p>
          Fährst Du langsamer als 8 km/h, kannst Du in den Rückwärtsgang
          schalten, und schon wechselt der Stromer seine Richtung. Die Türen
          gehen aber erst beim vollen Stopp auf. Um das Auto zu entriegeln, gibt
          es einen Park-Knopf.
        </p>

        <h2>Wie lange hält ein Tesla Elektroauto? </h2>
        <div>
          <p>
            Wusstest Du, dass die Konstruktion aus Stahl und Aluminium besteht
            und robust, wie ein Lkw ausgelegt ist? Der Wagen soll 1.600.000 km
            (1 Mio. Meilen) halten.
          </p>
          <h2>Autonomes Fahren </h2>
          <p>
            Der Wagen unterstützt auch autonomes Fahren in allen Ausführungen.
            Erlaubt sind die autonomen Systeme schon in Deutschland, jedoch muss
            noch ein Fahrer bei der Fahrt aktiv dabei sein. Das Model 3 kann
            mithilfe des erweiterten Lenkassistenten z.B. die Fahrspur
            selbstständig wechseln.
          </p>
          <h2>Verschenken</h2>
          <p>
            Ein Geschenkgutschein kommt bei vielen Menschen gut an. Lass Deine
            Freunde mit einem Tesla cruisen und die unfassbare Beschleunigung
            während der Mietdauer mit dem Sportwagen genießen.
          </p>
          <h2>Versteckte Funktionen </h2>
          <p>
            Auf der stilvollen Übersichtskarte des Touchscreens, die einzige
            Steuer- und Informationseinheit des Tesla Model 3, wirst Du bequem
            zum nächsten Supercharger navigiert. Ist der Onlineroutenplaner
            aktiviert, umfährt man aufkommende Staus automatisch. Aktuelle
            Verkehrsdaten werden zur Routenwahl herangezogen. Du kannst auch
            definieren, ab welcher Zeitverzögerung die Umfahrung automatisch
            erfolgen soll. Der Trip-Planer sorgt dafür, dass das System
            notwendige Ladestopps einfügt. Auf dem Display wird der
            Verkehrsfluss auf der Straße in Echtzeit und farblich hervorgehoben,
            dargestellt. Wie beim iPhone kann man mit zwei Fingern die
            Ausrichtung und die Größe der Karte verändern. Eine eingebaute
            SIM-Karte lässt nachts Software-Updates einspielen und zieht
            Live-Traffic-Informationen zur Routenplanung heran.
          </p>
          <h2> Mitfahrer </h2>
          <p>
            Das Platzangebot ist super, Du kannst noch vier Freunde einladen.
            Das große Glas-Panorama-Dach über den Rücksitzen ist bei einer
            klaren Nacht wunderbar, um die Sterne zu beobachten.
          </p>
          <h2>Künstliche Fahrgeräusche</h2>
          <p>
            Wusstest Du schon, dass seit 2019 Fahrzeuge für den US-Markt mit dem
            System für künstliche Fahrgeräusche ausgestattet werden? Das hilft
            uns Menschen auch ein leises Elektroauto bei geringen
            Geschwindigkeiten zu hören.
          </p>
          <h2>Bug Report</h2>
          <p>
            Falls Du einen Bug findest, also einen Fehler feststellst, kannst Du
            diesen Fehler durch Drücken des Sprechknopfes auf der rechten Seite
            des Lenkrades, direkt beschreiben und senden. Du musst nicht mal zum
            Telefon greifen. Tesla kümmert sich sehr schnell um das Problem.
            Wir, als Dein Vermietungspartner empfehlen Dir eine
            Vollkasko-Versicherung. Auf Wunsch kannst Du auch Teilkasko
            versichert sein.
          </p>
        </div>
      </div>
    </div>
  )
}
export async function getStaticProps(context) {
  const Kurzzeit = await getT3PDataByArt('K')
  const Langzeit = await getT3PDataByArt('L')
  const Mehrkilometer = await getT3PDataByArt('M')
  return {
    props: { Kurzzeit, Langzeit, Mehrkilometer }
  }
}

export default TeslaModel3Page
