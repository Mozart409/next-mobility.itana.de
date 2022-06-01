import Head from 'next/head';
import Link from 'next/link';

import FahrzeugKacheln from '@/ui/FahrzeugKacheln';
import SEO from '@/ui/seo';
import GoogleBewertungen from '@/ui/GoogleBewertungen';
import {JsonLD} from 'components/JsonLD';

const Heading1 = () => (
  <div className="py-2">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-2 lg:px-8">
      <div className="lg:text-center">
        <h1 className="text-xl font-bold leading-6 tracking-tight text-gray-900 sm:text-2xl sm:leading-8">
          Tesla mieten in Stuttgart - Elektromobilität erleben
        </h1>
      </div>
    </div>
  </div>
);
const ContentSection = () => (
  <div className="lg:prose-md prose mx-auto mt-24 lg:mt-8">
    <h2>Wo kann ich einen Tesla in Stuttgart mieten?</h2>
    <p>
      Bei uns in Markgröningen können Sie einen Tesla mieten. Dort steht auch
      unser Fuhrpark. Prüfen Sie in Echtzeit die Verfügbarkeit, und buchen Sie
      direkt Ihr Wunschauto. Verschenkte Gutscheine kommen bei interessierten
      E-Fahrzeug-Liebhabern gut an.{' '}
    </p>
    <h2>Wo kann ich mein eigenes Auto abstellen?</h2>
    <p>Wir haben genügend kostenlose Parkplätze an unserem Standort.</p>
    <h2 id="tesla-mieten"> Wie kann ich einen Tesla ausleihen und abholen? </h2>
    <p>
      Buchen Sie &uuml;ber unsere Website bei den&nbsp;Tarifpaketen ein E-Auto.
      Im &Uuml;bergabegespr&auml;ch (ca. 30 - 60 Minuten) kl&auml;ren wir alle
      Ihre Fragen und unterstützen Sie gerne bei der Tesla-App. Wir selbst sind
      begeisterte E-Auto-Fahrer! Kunden, die bei uns ein Elektroauto ausgeliehen
      haben, waren bisher{' '}
      <a
        href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
        target="_blank"
        rel="noopener noreferrer"
      >
        rundum zufrieden!
      </a>{' '}
      <br />
      Übrigens haben wir keine versteckten Kosten.
    </p>
    <h2 id="tesla-zurueckgeben">Unkomplizierte Rückgabe in Stuttgart</h2>
    <p>
      Innerhalb
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9a.0693609,12z/data=!4m12!1m6!3m5!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!2sItana+GmbH!8m2!3d48.902866!4d9.100305!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
      >
        {' '}
        unserer Gesch&auml;ftszeiten{' '}
      </a>
      wird das&nbsp;Fahrzeug von unseren freundlichen Mitarbeitern
      entgegengenommen. Au&szlig;erhalb der&nbsp;Gesch&auml;ftszeiten kommt der
      Schl&uuml;ssel in den Frunk (Front-Kofferraum), der App-Zugriff wird
      entzogen, und das Fahrzeug wird verriegelt. Die Rückgabe ist damit
      beendet. &nbsp;
    </p>
    <h2 id="versicherung">
      {' '}
      Versicherung - Selbstbehalt, was muss ich beim Tesla mieten wissen?{' '}
    </h2>
    <p>
      Alle unser Fahrzeuge sind ohne Mehrkosten mit einer Selbstbeteiligung von
      2500 &euro; Vollkaskoversichert. Sie k&ouml;nnen gegen Aufpreis die
      Selbstbeteiligung auf 1000 &euro; oder 500 &euro; reduzieren.
    </p>
    <h2 id="beachten-beim-tesla-mieten">
      {' '}
      Was muss ich beachten, wenn ich ein Elektorauto miete?{' '}
    </h2>
    <p>
      Mittlerweile ist die Ladeinfrastruktur in Deutschland sehr gut ausgebaut.
      Dadurch kann wie mit einem Verbrenner jeder Ort problemlos erreicht
      werden. Beim Tesla unterstützt Sie das intelligente Navigationssystem auf
      Reisen, die die Reichweite des Akkus übersteigen bei der Planung der
      Ladestopps, und navigiert Sie direkt zu den optimalen Ladesationen. &nbsp;
    </p>
    <h2 id="tesla-aufladen"> Aufladen + Reichweite beim Elektroauto</h2>
    <h3> Was kostet es, einen Tesla aufzuladen? </h3>
    <p>
      Das ist je nach Fahrzeugmodell, Anbieter, Batteriegröße und Art des
      Ladepunktes sehr unterschiedlich. An einer urbanen Typ 2 AC Ladesäule
      kostet die kWh zwischen 30 und 60 Cent. Bei einer Schnellladesäule (DC)
      muss man zwischen 40 und 80 Cent pro kWh rechnen.
    </p>
    <h3> Wie lange braucht ein Tesla, bis er aufgeladen ist? </h3>
    <p>
      Am Supercharger und anderen HPC Chargern dauert es ca. <b>20 Minuten</b>{' '}
      bis die Batterie eines Tesla Model 3 zu <b>75 %</b> geladen ist. An
      älteren 50 kW CCS Ladern dauert es je nach Batteriegröße bis zu zwei
      Stunden abhängig ist das von der genutzten Technik des Fahrzeuges und der
      Ladesäule. Bei den meisten Fahrzeugen reduziert sich die Ladeleistung mit
      steigendem Ladestand, sodass es auf der Reise nicht immer sinnvoll ist,
      das Fahrzeug unterwegs vollständig aufzuladen.
    </p>
    <h3 id="wo-tesla-aufladen">Wo kann ich den Tesla aufladen?</h3>
    <p>
      Supercharger sind an strategischen Stellen wie Wi-Fi-Hotspots,
      Einkaufszentren, Restaurants oder an Autohöfen verfügbar. Es gibt immer
      mehrere Ladeplätze, sodass auch bei starker Frequentierung fast immer ohne
      Wartezeit geladen werden kann.
      <br />
      Das Navigationssystem des Tesla zeigt alle Parameter des Ladeparks, wie
      die Anzahl der Stalls (Ladeplätze), die mögliche Ladeleistung, und sogar
      die tatsächliche Belegung in Echtzeit. Darüber hinaus erhalten Sie
      Informationen über Infrastruktur am Standort (Restaurants, Hotels, WC und
      Shops)
    </p>
    <br />
    <Link passHref href="/tesla-supercharger-leonberg/">
      <a rel="noopener noreferrer"> Tipps zum Aufladen findest Du hier. </a>
    </Link>
    <br />
    <br />
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.tesla.com/de_DE/supercharger"
    >
      Supercharger-Karte
    </a>{' '}
    <h3>Wie kann ich bezahlen?</h3>
    Es gibt zahlreiche Anbieter von Ladekarten und Ladeapps. Wir empfehlen die
    mobility+ App von EnBW. Die Abrechnung erfolgt in der Regel kWh-basiert.
    Manche Anbieter von Ladeapps bieten Abomodelle für Vielfahrer. Grundsätzlich
    können nach einer Registrierung nahezu alle Ladeapps ohne Grundgebühr
    genutzt werden. Für zu Hause ist je nach Fahrzeugmodell eine Wallbox
    sinnvoll.
    <br />
    <h3> Wie weit kann ich mit einem Elektroauto fahren? </h3>
    <p>
      Wie bei einem Verbrennerfahrzeug die maximale Reisedistanz nicht durch den
      Tankinhalt limitiert ist, so ist auch bei einem Elektrofahrzeug die
      möglich Länge der Reise nicht durch die Batteriekapazität begrenzt. Die
      Reichweite einer Ladung hängt vom Modell ab. Beim <b>Model 3</b>{' '}
      Performance liegt die Reichweite nach Herstellerangaben bei{' '}
      <b>530 km (WLTP)</b>. Die Batteriekapazität liegt bei 75 kWh. Beim{' '}
      <b>Model X</b> beträgt die Reichweite <b>507 km (WLTP)</b>. Die
      Batteriekapazität liegt bei 100 kWh.
      <br />
      Die realistische Reichweite eines Model 3 mit vollem Akku liegt je nach
      Fahrstil, Außentemperatur und anderen Faktoren bei rund 350 km.
    </p>
    <h3>Realer Verbrauch des Tesla Model 3 und des Tesla Model X</h3>
    <p>
      Im Schnitt verbraucht das Model X nach unseren Erfahrungen 26 kWh/100 km.
      Im Vergleich verbraucht das Model 3 je nach Modellvariante 16-20 kWh/100
      km.
    </p>
    <h3>Kosten</h3>
    <p>
      Die Kosten sind von vielen Faktoren abhängig, deshalb kann hier nur ein
      grober Richtwert angegeben werden. Beim Model 3 kosten 100 Kilometer bei
      einem Strompreis von 30ct/kWh rund 6 €.
    </p>
    <h3>Gibt es unterschiedliche Tesla-Supercharger?</h3>
    <p>
      Ja, die neueste Ausbaustufes ist der Supercharger V3. Klickt man auf der
      Übersichtskarte im Fahrzeugbildschirm rechts unten, um den nächsten
      Charger zu finden, werden die Stationen angezeigt. Durch Klick auf die
      Station sieht man in den Details die Ladeleistung von 150 kW (V2) oder 250
      kW (V3). Die Funktion &quot;On-Route Battery Warmup&quot; wärmt die
      Batterie während der Fahrt zum Supercharger auf Lade-Temperatur auf. Das
      verkürzt die Ladezeit ;&ndash; vor allem im Winter ;&ndash; signifikant.
    </p>
    <h4 className="mt-2 text-lg">V2</h4>
    <ul className="list-inside list-disc">
      <li>maximale Leistung 150 kW</li>
      <li>
        Jede Ladestation teilt sich die Leistung mit dem Nachbarn, falls dort
        jemand lädt (A/B)
      </li>
      <li>Ladekabel ist dicker als beim V3</li>
    </ul>
    <h4 className="mt-2 text-lg">V3</h4>
    <ul className="list-inside list-disc">
      <li>
        Benötigt einen Adapter für Model S und X (wir legen den Adapter
        kostenfrei bei)
      </li>
      <li>maximale Leistung 250 kW</li>
      <li>schnelleres Laden</li>
      <li>Jede einzelne Ladestation hat die volle Leistung</li>
      <li>wassergek&uuml;hlte Kabel</li>

      <li>Ladekabel ist d&uuml;nner als beim V2</li>
    </ul>
    <p>
      Der Ausbau der V3 Supercharger ist im vollen Gange, siehe&nbsp;
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://supercharge.info/changes"
      >
        supercharge.info/changes
      </a>
      .
    </p>
    <h3>Abrechnungsmethoden Supercharger</h3>
    <p>
      Am Supercharger wird je Kilowattstunde abgerechnet. Preise werden im
      Display des Fahrzeugs durch anklicken der Station sichtbar. Sofern ein
      volles Fahrzeug nicht entfernt wird fallen ggfs. Blockiergebühren an.
    </p>
    <h2>Warum sollte ich einen Tesla in Stuttgart mieten?</h2>
    <p>
      Weil es richtig Spaß macht, seinen Körper mit einer atemberaubenden
      Beschleunigung in den Sitz drücken zu lassen. Teile Deinem Beifahrer
      vorher mit, den Kopf gerade zu halten! Tesla&apos;s Leitspruch lautet: „To
      create the most compelling car company of the 21st century by driving the
      world&apos;s transition to electric vehicels”. Das ist purer Fahrspaß mit
      atemberaubendem Fahrgefühl. Willkommen bei der umweltfreundlichen und
      sportlichen E-Mobilität von Elon Musk.
    </p>
    <h3>Innovation</h3>
    <p>
      Schaut man sich das einfache Cockpit eines Porsche 911 von 1963 an und
      vergleicht es mit einer Oberklassen-Limousine, gibt es sehr viel mehr
      Knöpfe, die von der Fahrbahn ablenken. Ganz anders ist das beim Tesla,
      dort gibt es ein großes Display rechts vom Fahrer das als Schaltzentrale
      dient. Hier bündeln sich alle Funktionen wie den Sound auswählen, das
      Navigationssystem bedienen, Termine im Kalender organisieren oder im Web
      surfen. Falls sich in Deutschland die Gesetzeslage zum autonomen Fahren
      ändert, kann man diese Funktionen in der Zukunft auch während der Fahrt
      benutzen.
    </p>
    <h3>Sicherheit</h3>
    <p>
      Ein Überschlag bei einem Unfall ist meistens sehr unschön. Bei Tesla liegt
      der Schwerpunkt des Autos sehr tief, da die Batterie unter dem Innenraum
      des Fahrzeuges befestigt ist. Somit sinkt die Wahrscheinlichkeit stark,
      dass das Elektrofahrzeug sich bei einem Unfall überschlägt. Dadurch hat
      des Elektroauto auch eine bessere Straßenlage. Bei einem Aufprall schützen
      den Fahrer Schienen aus ultra-festem Borstahl zur effizienten
      Energieabsorbierung.
    </p>
    <h3>Dual-Motor</h3>
    <p>
      Das Tesla Model 3 Performance hat einen elektrischen Allrad-Antrieb mit
      einem Dual-Motor. Das heißt, ein Motor treibt die Vorderachse, der andere
      die Hinterachse an. Der eine Motor sorgt für Leistung, der andere für
      Reichweite. <b>Fällt ein Motor aus</b>, kann man trotzdem{' '}
      <b>weiterfahren</b>. Das Model X ist das elektrische SUV der Flotte. Die
      unglaubliche Beschleunigung begeistert fast jeden.
    </p>
    <h3>Updates</h3>
    <p>
      Über Nacht wird beim Tesla ein neues Update eingespielt und die Funktionen
      der Limousine erheblich erweitert. Tesla setzt auch auf
      Schwarmintelligenz, die Telemetriedaten werden anonymisiert an die Tesla
      Cloud geschickt. Bremsen viele Fahrer in einer Kurve auf 35 km/h ab, merkt
      sich das der Autopilot und gibt dem Fahrer einen Hinweis.
    </p>
    <h3>Komfort</h3>
    <p>
      Der Fahrzeuginnenraum kann automatisch, vorgewärmt oder vorklimatisiert
      werden. Über die Tesla-App ko&uml;nnen Sie das Fahrzeug orten, oder die
      Reichweite überprüfen. Oder Sie hören im Premium-Audiosystem Ihre
      Lieblingsmusik. Diese Features der neuen Mobilität faszinieren uns.
    </p>
    <h3>Langläufer</h3>
    <p>
      Die Antriebseinheit des Teslas ist dafür ausgelegt,{' '}
      <b>1,6 Millionen Kilometer wartungsfrei zu laufen</b>. Das liegt auch
      daran, dass ein E-Auto technisch einfacher als ein Verbrennungsmotor ist.
      Das variable Getriebe z.B. entfällt hier, möchte der Fahrer
      rückwärtsfahren, dreht sich der Motor einfach in die andere Richtung. Der
      Antrieb liegt kompakt zwischen den Rädern und verbindet Elektromotor,
      Getriebe und den Umrichter.
    </p>
    <h3>Super Charger Netz</h3>
    <p>
      Das
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.tesla.com/de_DE/supercharger"
      >
        {' '}
        Super Charger Netz von Tesla{' '}
      </a>
      steht allen Tesla Fahrzeugen mit Ausnahme des Roadster der ersten
      Generation zur Verfügung. In Deutschland gibt es bereits über 100
      Standorte. Es wird für alle europäischen Ladestationen laut Tesla,
      Ökostrom gekauft. Weltweit gibt über 30.000 Super-Charger-Anschlüsse.
      Innerhalb kurzer Zeit lädt der Akku auf 80%, und die Reise geht weiter.
      <br />
      <br />
      Wir bevorzugen regenerative Energien und haben eine
      <Link passHref href="/photovoltaikanlage/">
        <a rel="noopener noreferrer"> hauseigene Photovoltaik-Anlage </a>
      </Link>
      mit der wir die E-Autos emissionsfrei laden. Bei Abholung ist der Akku
      nachhaltig mit <b>Sonnenenergie</b> geladen.
    </p>
    <h3>Stuttgart</h3>
    <p>
      Stuttgart bietet einiges an Kultur und Sehenswürdigkeiten, die man mit dem
      Mietwagen komfortabel besuchen kann. Die grandiose 360 Grad Sicht auf dem
      Fernsehturm in 150 Meter Höhe bietet einen schönen Start für eine
      Sightseeing-Tour durch Stuttgart. Kaufen Sie Ihre Tickets am besten
      online. Anschließend empfehlen wir eine Zeitreise zum Schloss Solitude von
      Herzog Carl Eugen. Die herausragende Architektur mit ihrem herrlichen
      Ausblick über Stuttgart fasziniert Sie sicherlich. Der Tesla kann bequem
      in Laufentfernung geparkt werden. Besuch auch die Triberger Wasserfälle im
      140 km entfernten Triberg. So können Sie den gemieteten Tesla auf der
      Autobahn, wie auch im malerischen Schwarzwald ausgiebig genießen.
    </p>
    <h3>Ludwigsburg</h3>
    <p>
      Empfehlenswert ist ein Abstecher in das am Anfang des 18. Jahrhunderts
      gegründeten Ludwigsburg. Wenn Sie dort das größte und auch noch im
      Original erhaltene Barockschloss Deutschlands erleben möchten, finden Sie
      weitere Informationen bei der{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.schloss-ludwigsburg.de/"
      >
        Schlossverwaltung Ludwigsburg
      </a>
      {'. '}
      Eine kurvenreiche Strecke durch den Wald genießt man bei der Rundfahrt ab
      Ludwigsburg über Sulzbach an der Murr, Spiegelberg, Löwenstein, Mainhardt,
      Pfedelbach, Obersteinbach, Michelfeld, Murrhardt und wieder zurück. Eine
      tolle Strecke zum cruisen.
    </p>
    <h3>Kein Zwischenvertrieb</h3>
    <p>
      Tesla gewährt keine Rabatte und vertreibt seine Autos direkt. Das hat den
      Vorteil, die Rabatte über die hauseigene Werkstatt nicht wieder
      zurückverdienen zu müssen. Um das Elektrofahrzeug vor dem Kauf ausgiebig
      zu testen, bietet es sich an, eines in unserer Autovermietung zu leihen.
      Wir als Vermieter empfehlen einen Monat, als Mietzeit zu buchen, dann sind
      die Tarife günstiger und desto besser können Sie alles ausprobieren und
      testen. Die Begeisterung bringt die Tesla Emotion voll zum Ausdruck.
      Leihen Sie einen atemberaubenden Tesla und erhalten Sie ein stilvolles
      E-Fahrzeug mit einer unglaublichen Beschleunigung. Buchen Sie Ihr
      Wunschfahrzeug mit wenigen Klicks und sofortiger Buchungsbestätigung. Die
      Anmietung ist einfach und schnell.
    </p>
  </div>
);
const FeatureSection = () => (
  <div className="mx-auto">
    <div className="gap-x-4 gap-y-8 lg:grid lg:grid-cols-2">
      <div className="lg:prose-md prose mx-auto">
        <h2>Verknüpfung Tesla App</h2>
        <p>
          Wir richten gerne die Tesla-App auf Ihrem Smartphone ein und erklären
          Ihnen die <b> interessanten Funktionen</b>. Genießen Sie sofort Ihre{' '}
          <b>Lieblingsmusik</b>. Oder verknüpfen Sie Ihren <b>Kalender</b> und
          lassen den Innenraum vor der Fahrt <b>aufwärmen</b>. Erleben Sie
          Elektromobilität von heute.
        </p>
      </div>

      <div className="lg:prose-md prose mx-auto">
        <h2>Bester Service </h2>
        <p>
          Wir haben Zeit für Sie und Ihre Fragen. Bei uns ist eine
          <b> umfangreiche Einweisung</b> mit <b>praxisnahen Hinweisen</b>
          <b> inklusive einer Probefahrt</b> immer enthalten.
        </p>
      </div>

      <div className="lg:prose-md prose mx-auto">
        <h2 id="kundenzufriedenheit">Zufriedene Kunden</h2>

        <p>
          Kunden, die bei unserem Tesla-Verleih ein Elektroauto gemietet haben,
          waren <b> sehr zufrieden</b>.{' '}
        </p>

        <GoogleBewertungen />
      </div>
    </div>
  </div>
);
function IndexPage() {
  const jsonLD1 = {
    '@context': 'https://schema.org/',
    '@type': 'AutoRental',
    slogan: 'Super Service',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Cash, Credit Card',
    hasMap:
      'https://www.google.com/maps/place/Itana+GmbH/@48.9028695,9.098111,17z/data=!3m1!4b1!4m5!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305',
    logo: {
      '@type': 'ImageObject',
      url: 'https://mobility.itana.de/icon-192.png',
    },
    image: {
      '@type': 'ImageObject',
      url: 'https://mobility.itana.de/icon-192.png',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Stuttgart',
      },
      {
        '@type': 'State',
        name: 'Baden-Württemberg',
      },
    ],
    branchOf: {
      '@type': 'Organization',
      name: 'Itana GmbH',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'http://schema.org/Thursday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'http://schema.org/Tuesday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'http://schema.org/Friday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'http://schema.org/Monday',
        opens: '08:00:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        closes: '18:00:00',
        dayOfWeek: 'http://schema.org/Wednesday',
        opens: '08:00:00',
      },
    ],
    name: 'Tesla mieten Stuttgart',
    url: 'https://www.mobility.itana.de/',
    priceRange: 'ab 31,63 €',
    description:
      'Tesla mieten in Stuttgart ✓ Sofort  verfügbar ✓ einfach ✓  preisgünstig ► Montag - Freitag von 8:00 - 18:00 Uhr | Jetzt anfragen ☎ +49 711 49066 450',
    address: {
      '@type': 'PostalAddress',
      name: 'Itana GmbH',
      streetAddress: 'Maulbronner Weg 33',
      addressRegion: 'Markgröningen',
      postalCode: '71706',
      addressCountry: 'Germany',
      telephone: '+49 711 49066 450',
    },
  };
  const jsonLD2 = {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://mobility.itana.de/',
    name: 'Mobility Itana GmbH',
    image: {
      '@type': 'ImageObject',
      url: 'https://mobility.itana.de/icon-192.png',
    },
    logo: {
      '@type': 'ImageObject',
      url: 'https://mobility.itana.de/icon-192.png',
    },
    url: 'https://mobility.itana.de/',
    telephone: '+49 711 49066 450',
    address: {
      '@type': 'PostalAddress',
      name: 'Itana GmbH',
      streetAddress: 'Maulbronner Weg 33',
      addressRegion: 'Markgröningen',
      postalCode: '71706',
      addressCountry: 'Germany',
      telephone: '+49 711 49066 450',
    },
    priceRange: 'ab 31,63 €',
    description:
      'Tesla Model X | Tesla Model 3 | Tesla mieten in Stuttgarter E-Autovermietung ✓ Elektromobilität erleben ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +4971149066450',
  };
  return (
    <div>
      <SEO
        title="Tesla mieten in Stuttgart | Elektromobilität | Autovermietung"
        description="Tesla Model X | Tesla Model 3 | Elektroauto Tesla mieten in Stuttgarter Autovermietung ✓ Elektromobilität ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +4971149066450"
      />

      <JsonLD jsonld={jsonLD1} />
      <JsonLD jsonld={jsonLD2} />

      <Head>
        <link rel="canonical" href="https://mobility.itana.de/" />
      </Head>

      <div>
        <Heading1 />

        <FahrzeugKacheln />
        <FeatureSection />
        <ContentSection />
      </div>
    </div>
  );
}

export default IndexPage;
