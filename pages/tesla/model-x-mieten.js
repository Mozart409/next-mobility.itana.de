import TeslaQuickLinks from '@/ui/TeslaQuickLinks'

import CTA from '@/ui/CTA'
import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import SEO from '@/ui/seo'

import { getTXDataByArt } from 'lib/api'

function TeslaModelX({ Kurzzeit, Langzeit, Mehrkilometer }) {
  return (
    <div>
      <SEO
        title="Tesla Model X mieten | ab 83,30€ | Autoverleih - Itana GmbH"
        description="Tesla Model X mieten | Bester Autoverleih | App Zugang auf ihrem Smartphone | SUV genießen ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +49 711 49066 450"
      />
      <Head>
        <link
          rel="canonical"
          href="https://mobility.itana.de/tesla/model-x-mieten/"
        />
      </Head>
      <section>
        <h1 className="text-2xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Tesla Model X mieten
        </h1>
        <h2>Komfortables SUV-Powerhouse mit enormer Reichweite</h2>

        <div className="max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="mx-auto">
            <div className="relative">
              <div className="md:grid md:grid-cols-8">
                <div className="col-span-4 my-auto lg:col-span-6">
                  <Link
                    passHref
                    href="#tesla-model-x"
                    title="Tesla Model X"
                    aria-label="Tesla Model X"
                  >
                    <Image
                      src="/images/cards/tesla-model-x.png"
                      className="mx-auto mt-4 h-96 rounded"
                      alt="Tesla Model X mieten"
                      height="600"
                      width="1000"
                    />
                  </Link>
                </div>
                <div className="col-span-4 lg:col-span-2">
                  <div className="hidden grid-cols-1 justify-items-center mx-auto md:grid">
                    <rentware-article-booking
                      article-id="11JUVM"
                      view="calendar"
                    ></rentware-article-booking>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   <div className="relative text-center">
          <Image
            src="/images/cards/tesla-model-x.png"
            className="mx-auto mt-4 h-96 rounded"
            alt="Tesla Model X silber mieten"
            height="600"
            width="1000"
          />
        </div> */}
      </section>

      <section>
        <div className="grid grid-cols-1 justify-items-center mx-auto md:hidden">
          <rentware-article-booking
            article-id="11JUVM"
            view="calendar"
          ></rentware-article-booking>
        </div>

        <CTA
          data_cy="TeslaModelXMieten"
          fillBG="true"
          fullWidth="true"
          title="Tesla Model X mieten"
          link="https://itana.rentware.io/"
        />
      </section>
      <TeslaQuickLinks />
      <div className="mx-auto mt-24 prose lg:prose-md">
        <h2>Technische Fakten zum Tesla Model X</h2>
        <h3>Wie viel PS hat ein Tesla Model X?</h3>
        <p>
          Das X kommt mit starken 525 PS oder 386 Kilowatt&nbsp;daher. Ein
          Kraftpaket, das eine H&ouml;chstgeschwindigkeit von 250 km/h erreicht.
          Laut Hersteller betr&auml;gt die Reichweite 565 Kilometer (NEFZ). Die
          realistische Reichweite liegt darunter, abhängig davon sind Fahrstil,
          Temperatur und andere Faktoren. Doch die sportliche Beschleunigung des
          Elektroautos erzeugt bei jedem Mieter, der nur am Wochenende mietet,
          die pure Begeisterung. Genug Mobilität?
        </p>
        <h3>Hat das Model X Allradantrieb?</h3>
        <p>
          Ja, er hat Vierradantrieb. Der&nbsp;elektrische Dual Motor mit
          adaptiver Luftfederung beschleunigt das Elektroauto mit 525 Nm.
          Die&nbsp;Zugkraft&nbsp;kann durch den Elektromotor unmittelbar an den
          Antriebsstrang weitergegeben werden.&nbsp;&nbsp;
        </p>
        <h3>Wie schnell ist das Model X von null auf 100 km/h?</h3>
        <p>
          Die bemerkenswerte Beschleunigung des Elektro-SUV von 4,9 Sekunden
          laut Tesla, l&auml;sst den Nachbarn an der Ampel stehen.
          Das&nbsp;elektrische Universal Sport Vehicle ist schneller als alle
          anderen auf der Stra&szlig;e.
        </p>
        <h3>Ist der Tesla Model X ein SUV? Wie viel Stauraum hat er?</h3>
        <p>
          Ja, er ist ein&nbsp;elektrischer SUV. Er zeichnet sich durch seine
          hohe Sicherheit und seinen gro&szlig;en Stauraum von 2.487 Liter aus,
          das ist mehr als die meisten Stadtgel&auml;ndewagen zu bieten haben.
          Zudem kann man eine Anh&auml;ngelast von &uuml;ber 2.250 kg
          anh&auml;ngen. Das Platzwunder&nbsp;erm&ouml;glicht durch das nicht
          vorhanden sein von mechanischen Fahrzeugsystemen, Motor, Auspuff und
          K&uuml;hler unglaublich viel Platz. So kann ein Fahrrad mit montierten
          R&auml;dern oder ein Snowboard einfach eingeladen werden. Der
          gro&szlig;e Stauraum l&auml;sst keine W&uuml;nsche offen.
        </p>
        <h3>Wie viele Sitzpl&auml;tze hat das Model X?</h3>
        <p>
          Es hat f&uuml;r sieben erwachsene Personen Platz. Je nach Einstellung
          k&ouml;nnen auch&nbsp;sechs oder f&uuml;nf Personen mit entsprechend
          mehr Gep&auml;ckraum Platz finden. Die Sitze kann man einzeln oder
          alle zusammen umklappen.&nbsp;
        </p>
        <h3>Fl&uuml;gelt&uuml;ren</h3>
        <p>
          Die gro&szlig;artigen Falcon Wing T&uuml;ren von Tesla
          erm&ouml;glichen leichten Zugang zu den hinteren Reihen. Selbst bei
          sehr engen Parkl&uuml;cken &uuml;berpr&uuml;fen die Sensoren die
          Au&szlig;enwelt und &ouml;ffnen die einzigartigen
          Fl&uuml;gelt&uuml;ren so, damit nichts besch&auml;digt wird. Die
          Vordert&uuml;ren &ouml;ffnen automatisch, sobald man sich dem Tesla
          n&auml;hert. Durch ein kurzes Antippen des Bremspedals schlie&szlig;en
          sich die T&uuml;ren wieder. Die Zukunft l&auml;sst gr&uuml;&szlig;en,
          stilvoll und attraktiv.&nbsp;
        </p>
        <h3>Autopilot</h3>
        <p>
          Der Autopilot darf in Deutschland aus rechtlichen Gr&uuml;nden noch
          nicht eingesetzt werden. Die Rundum&uuml;berwachung des Mietwagens
          reicht bis zu 250 Meter Entfernung und ben&ouml;tigt die 40-fache
          Rechenleistung der vorherigen Modelle. Der Autopilot soll den Fahrer
          in Zukunft mit Sicherheits- und Komfortfunktionen
          unterst&uuml;tzen.&nbsp;Die Funktionen des automatischen Piloten
          k&ouml;nnen in seiner Fahrspur lenken, beschleunigen und bremsen.
          Aktuell verlangen die Autopilot-Funktionen die aktive &Uuml;berwachung
          des Fahrers!
        </p>
        <h3>Warum hat das Model X Kameras, Ultraschall und Radar?</h3>
        <p>
          Die integrierten Kameras in den Teslas sorgen f&uuml;r eine 360 Grad
          Sicht.
        </p>
        <p>
          Autos, die in der N&auml;he fahren, werden durch den Ultraschallsensor
          gescannt und verhindern m&ouml;gliche Ber&uuml;hrungen und helfen den
          Wagen einzuparken. Das ist in St&auml;dten mit engen
          Parkl&uuml;cken&nbsp;besonders bequem.&nbsp;
        </p>
        <p>
          Das Radar erkennt 160 Meter entfernte Objekte und reagiert darauf mit
          z.B. einem Ausweichman&ouml;ver oder einer Warnung.&nbsp;
        </p>

        <h2>Tesla Sicherheit </h2>
        <h3>Wie sicher ist das&nbsp;atemberaubende Model X?</h3>
        <p>
          Die Komponenten der E-Mobilit&auml;t wie Karosserie,
          R&uuml;ckhaltesysteme, Batterie, Fahrwerk sind f&uuml;r E-Autos
          gestaltet. Dadurch ergibt sich ein reduziertes Verletzungsrisiko
          f&uuml;r die Personen im Fahrzeug. Bei der NCAP-Sicherheitsbewertung
          hat das Model bei allen Kategorien (Erwachsene, Kind,
          Fu&szlig;g&auml;nger, Sicherheitsassistent) mit der maximalen Anzahl
          von beeindruckenden 5 Sternen abgeschlossen. Es ist bekannt, dass Musk
          sehr gerne experimentiert und Tests durchf&uuml;hrt, das tr&auml;gt
          enorm zur Fahrsicherheit bei.
        </p>

        <h2>Umwelt und Nachhaltigkeit</h2>
        <h3>
          CO2 - Ist ein Elektroauto umweltfreundlicher als ein Verbrenner?
        </h3>
        <p>
          Oft startet mit der Frage eine Grundsatzdiskussion, da die Sichtweisen
          &uuml;ber den Lebenszyklus, wie z.B. die Produktion des Stromers oder
          Verbrenners, hinausreichen. Zu einem Ende kommt man meist nicht,
          deshalb betrachten wir hier nur das Fahrzeug. Somit kann man sagen,
          dass wegen der geringen Anzahl der Bauteile und der Einfachheit des
          elektrischen Antriebes im Vergleich zum Verbrenner sehr viel weniger
          Energie verbraucht wird. Wichtig ist, woher die Energie kommt und wie
          sie zur Verf&uuml;gung gestellt wird.&nbsp;
        </p>
        <h4>Photovoltaik</h4>
        <p>
          Elektromobilit&auml;t beschreibt&nbsp;das Nutzen von Elektrofahrzeugen
          mit Nachhaltigkeitsaspekten.&nbsp;Wir setzen das zus&auml;tzliche mit
          unserer{' '}
          <Link
            className="font-semibold text-itana-red"
            href="/photovoltaikanlage/"
          >
            <a>hauseigenen Photovoltaikanlage</a>
          </Link>{' '}
          um, mit der wir&nbsp;die Teslas laden. Dadurch wird die Sonnenenergie
          direkt f&uuml;r das E-Fahrzeug genutzt.&nbsp;
        </p>
        <h2>Warum ein Tesla-Elektroauto?</h2>
        <ul className="list-disc list-inside">
          <li>lautlos</li>
          <li>nachhaltig mit Photovoltaik aufladbar</li>
          <li>unfassbare Fahrgeschwindigkeit mit viel Fahrspa&szlig;</li>
          <li>
            durch den E-Motor liegt ohne Verz&ouml;gerung das volle Drehmoment
            an
          </li>
          <li>keine CO2 Abgase</li>
          <li>
            revolution&auml;re Ladestationen, die das E-Auto sehr schnell laden
            k&ouml;nnen
          </li>
          <li>Neue Funktionen &uuml;ber Nacht durch Updates</li>
          <li>durchdachte Bedienung</li>
          <li>umfassende Einweisung unserer Autovermietung</li>
          <li>atemberaubende Fl&uuml;gelt&uuml;ren</li>
          <li>f&uuml;r Privatpersonen wie Gesch&auml;ftskunden</li>
          <li>einfach und g&uuml;nstig zum Leihen</li>
          <li>atemberaubende Teslas fahren</li>
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps(context) {
  const Kurzzeit = await getTXDataByArt('K')
  const Langzeit = await getTXDataByArt('L')
  const Mehrkilometer = await getTXDataByArt('M')
  return {
    props: { Kurzzeit, Langzeit, Mehrkilometer },
  }
}

export default TeslaModelX
