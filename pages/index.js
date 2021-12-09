import Head from 'next/head'
import Link from 'next/link'
import { helmetJsonLdProp } from 'react-schemaorg'
import FahrzeugKacheln from '@/ui/FahrzeugKacheln'

import SEO from '@/ui/seo'
import GoogleBewertungen from '@/ui/GoogleBewertungen'

const Heading1 = () => (
  <div className="py-2 bg-white">
    <div className="px-4 mx-auto max-w-screen-xl sm:px-2 lg:px-8">
      <div className="lg:text-center">
        <h1 className="text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          Tesla mieten in Stuttgart - Elektromobilität erleben
        </h1>
      </div>
    </div>
  </div>
)

const ContentSection = () => (
  <div className="mx-auto mt-24 lg:mt-8 prose lg:prose-md">
    <h2>Wo kann ich einen Tesla in Stuttgart mieten?</h2>
    <p>
      Bei uns in Markgröningen kannst Du einen Tesla mieten. Dort steht auch
      unser Fuhrpark. Stelle uns gerne eine Anfrage. Verschenkte Gutscheine
      kommen bei interessierten E-Fahrzeug-Liebhabern gut an.{' '}
    </p>
    <h2>Wo kann ich mein eigenes Auto abstellen?</h2>
    <p>Wir haben genügend kostenlose Parkplätze an der Straße.</p>
    <h2 id="tesla-mieten"> Wie kann ich einen Tesla ausleihen und abholen? </h2>
    <p>
      Ruf in unserer Tesla Autovermietung an oder buche &uuml;ber unsere Website
      bei den&nbsp;Tarifpaketen ein E-Auto. Im &Uuml;bergabegespr&auml;ch (ca.
      30 - 60 Minuten) kl&auml;ren wir alle Deine Fragen und verbinden Dein
      Handy mit der Tesla-App. Wir selbst sind begeisterte Tesla-Fans. Kunden,
      die bei uns ein Elektroauto ausgeliehen haben, waren bisher{' '}
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
      Schl&uuml;ssel in den Frunk (vorderseitiger Kofferraum) und der
      App-Zugriff wird entzogen und das Fahrzeug verriegelt. Die Rückgabe ist
      beendet. &nbsp;
    </p>
    <h2 id="versicherung">
      {' '}
      Versicherung - Selbstbehalt, was muss ich beim Tesla mieten wissen?{' '}
    </h2>
    <p>
      Sie k&ouml;nnen zwischen einer Vollkasko-Versicherung mit
      Selbstbeteiligung von 2500 &euro; / 1000 &euro; oder 500 &euro;
      w&auml;hlen.
    </p>
    <h2 id="beachten-beim-tesla-mieten">
      {' '}
      Was muss ich beachten, wenn ich ein Elektorauto miete?{' '}
    </h2>
    <p>
      Das Elektroauto muss rechtzeitig aufgeladen werden, so wie der Verbrenner
      rechtzeitig tanken muss. Beim Tesla unterstützt Dich das intelligente
      Navigationssystem mit der Anzeige der nächsten Ladestation und navigiert
      Dich dorthin. &nbsp;
    </p>
    <h2 id="tesla-aufladen"> Aufladen + Reichweite beim Elektroauto</h2>
    <h3> Was kostet es, einen Tesla aufzuladen? </h3>
    <p>
      Das ist je nach Ladezeit, Anbieter, Batteriegröße und Art des Ladepunktes
      sehr unterschiedlich. An einer urbanen Typ 2 AC Ladesäule kostet die kWh
      zwischen 30 und 40 Cent. Bei einer Schnellladesäule (DC) muss man zwischen
      30 und 80 Cent pro kWh rechnen.
    </p>
    <h3> Wie lange braucht ein Tesla, bis er aufgeladen ist? </h3>
    <p>
      Am Supercharger und anderen HPC Chargern dauert es ca. <b>20 Minuten</b>{' '}
      bis die Batterie eines Tesla Model 3 zu <b>75 %</b> geladen ist. An
      älteren 50 kW CCS Ladern dauert es je nach Batteriegröße bis zu zwei
      Stunden abhängig ist das von der genutzten Technik des Fahrzeuges und der
      Säule. Bei den meisten Fahrzeugen reduziert sich die Ladeleistung mit
      steigendem Ladestand, sodass es auf der Reise nicht sinnvoll ist das
      Fahrzeug unterwegs immer voll aufzuladen.
    </p>
    <h3 id="wo-tesla-aufladen">Wo kann ich den Tesla aufladen?</h3>
    <p>
      Die innovativen Ladesäulen sind an strategischen Stellen wie
      Wi-Fi-Hotspots, Einkaufszentren, Restaurants oder an Autohöfen verfügbar.
      Es gibt immer mehrere Ladeplätze, die Dich mit Strom versorgen. Auf dem
      Bildschirm im Auto oder am Smartphone einfach den nächsten Charger suchen
      lassen. Das Smartphone teilt das Ergebnis direkt mit dem Auto und
      navigiert Dich dorthin.
      <br />
      Die intelligente Suche im Tesla zeigt alle Parameter der Ladesäule, wie
      Öffnungszeiten, wie schnell geladen werden kann und sogar die tatsächliche
      Belegung in Echtzeit.
    </p>
    <br />
    <Link passHref href="/tesla-supercharger-leonberg/">
      <a rel="noopener noreferrer"> Tipps zum Aufladen findest Du hier. </a>
    </Link>
    Die
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.tesla.com/de_DE/supercharger"
    >
      {' '}
      Tesla Supercharger Karte{' '}
    </a>{' '}
    auf dem Display navigiert Dich zur nächsten Ladestation.
    <h3>Wie kann ich bezahlen?</h3>
    Mit{' '}
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://www.maingau-energie.de/e-mobilit%C3%A4t/Autostrom-Tarif"
    >
      Maingau-Energie{' '}
    </a>{' '}
    kannst Du einfach <b>Strom laden</b> und <b>bequem bezahlen</b>.{' '}
    <b>Ohne Vertragslaufzeit</b> und <b>ohne Grundgebühr</b> gibt es eine faire
    kWh-basierte Abrechnung. Das flächendeckende Ladenetz ist einfach und bequem
    zu handhaben. Für zu Hause ist eine Wallbox sinnvoll.
    <h3> Wie weit kann ich mit einem Elektroauto fahren? </h3>
    <p>
      Das kommt auf das Modell an, beim <b>Model 3</b> Performance, dem
      Sportwagen, liegt die Reichweite nach Herstellerangaben bei{' '}
      <b>530 km (WLTP)</b>. Die Batteriekapazität liegt bei 75 kWh. Beim{' '}
      <b>Model X</b> beträgt die Reichweite <b>565 km (NEFZ)</b>. Die
      Batteriekapazität liegt bei 100 kWh.
      <br />
      Die realistische Reichweite eines Model 3 mit vollem Akku beim Start liegt
      je nach Fahrstil, Außentemperatur und anderen Faktoren bei 300-400 km.
    </p>
    <h3>Realer Verbrauch des Model X</h3>
    <p>
      Im Schnitt verbraucht das Model X nach unseren Erfahrungen 26 kWh/100 km.
      Im Vergleich verbraucht die Model 3 Limousine 16-20 kWh/100 km.
    </p>
    <h3>Kosten</h3>
    <p>
      Die Kosten sind von vielen Faktoren abhängig, deshalb hier nur ein grober
      Richtwert. Am Supercharger kostet die Kilowattstunde 33 Cent. Bei einem
      Verbrauch von 26 kWh/100 km kosten die ca. 8,60 €.
    </p>
    <h3>Gibt es unterschiedliche Tesla-Supercharger?</h3>
    <p>
      Ja, die neueste Ausbaustufes ist der Supercharger V3. Klickt man auf der
      Übersichtskarte im Bildschirm rechts unten, um den nächsten Charger zu
      finden, werden die Stationen angezeigt. Durch Klick auf die Station sieht
      man in den Details die Ladeleistung von 150 (V2) oder 250 Kilowatt (V3).
      Kann nur 130 Kilowatt Strom entnommen werden, wurde die Station noch nicht
      aktualisiert. Es gab es ein Software-Update, das die Funktion
      &quot;On-Route Battery Warmup&quot; eingeführt hat, das wärmt die Batterie
      während der Fahrt zum Charger auf Lade-Temperatur auf. Das spart 25 % der
      Ladezeit ein.
    </p>
    <h4 className="mt-2 text-lg">V2</h4>
    <ul className="list-disc list-inside">
      <li>maximale Leistung 150 Kilowatt</li>
      <li>
        Pairing, d.h. jede Ladestation teilt sich die Leistung mit dem Nachbarn,
        falls dort jemand lädt
      </li>
      <li>Ladekabel ist dicker als beim V3</li>
    </ul>
    <h4 className="mt-2 text-lg">V3</h4>
    <ul className="list-disc list-inside">
      <li>
        wird in Deutschland erst ausgebaut und benötigt ein Adapter für Model S
        und X (wir legen den Adapter kostenfrei bei)
      </li>
      <li>maximale Leistung 250 Kilowatt</li>
      <li>schnelleres Laden</li>
      <li>
        kein Pairing, d.h. jede einzelne Ladestation hat die volle Leistung
      </li>
      <li>wassergek&uuml;hlte Kabel</li>

      <li>Ladekabel ist d&uuml;nner als beim V2</li>
    </ul>
    <p>
      Der Ausbau der V3 Supercharger ist im vollen Gange, siehe&nbsp;
      <a href="https://supercharge.info/changes">supercharge.info/changes</a>.
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
      world’s transition to electric vehicels”. Das ist purer Fahrspaß mit
      atemberaubendem Fahrgefühl. Leise ist der Stromer im Gegensatz zum
      Benziner auch. Willkommen bei der umweltfreundlichen und sportlichen
      E-Mobilität von Elon Musk. Die einzigartigen Flügeltüren passen sich per
      Sensoren an die Umgebung an und stoßen so nicht an. Wir als
      Teslavermietung sind bei so viel Innovation begeistert.
    </p>
    <h3>Umwelt und Feinstaub</h3>
    <p>
      Um seinen CO2-Fußabdruck gering zu halten, kann man öffentliche
      Verkehrsmittel nutzen. Doch wenn man ungern mit Bus oder Bahn in die
      Stuttgarter Innenstadt fährt, hat man immer noch die Alternative, ein
      Elektroauto zu mieten und schadstoffarm die Innenstadt aufzusuchen. Es ist
      eine traumhafte Alternative ein Elektrofahrzeug zu mieten, egal ob Model 3
      oder Model X.
    </p>
    <h3>Innovation</h3>
    <p>
      Schaut man sich das einfache Cockpit eines Porsche 911 von 1963 an und
      vergleicht es mit einer Oberklassen-Limousine, gibt es sehr viel mehr
      Knöpfe, die von der Fahrbahn ablenken. Ganz anders ist das beim Tesla,
      dort gibt es ein 17 Zoll großes Display rechts vom Fahrer das als
      Schaltzentrale dient. Hier bündeln sich alle Funktionen wie den Sound
      auswählen, das Navigationssystem bedienen, Termine im Kalender
      organisieren oder im Web surfen. Falls sich in Deutschland die
      Gesetzeslage zum autonomen Fahren ändert, kann man diese Funktionen in der
      Zukunft auch während der Fahrt benutzen.
    </p>
    <h3>Sicherheit</h3>
    <p>
      Ein Überschlag bei einem Unfall ist meistens sehr unschön. Bei Tesla liegt
      der Schwerpunkt des Autos sehr tief, da die Batterie unter dem Innenraum
      des Fahrzeuges befestigt ist. Somit sinkt die Wahrscheinlichkeit stark,
      dass das Elektrofahrzeug sich bei einem Unfall überschlägt. Dadurch hat
      der Stromer auch eine bessere Straßenlage. Bei einem Aufprall schützen den
      Fahrer Schienen aus Ultra-festem Borstahl zur effizienten
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
      der Limousine erheblich erweitert. Zum Beispiel gab es eine{' '}
      <b>Anfahrtshilfe </b>
      am Berg gratis per Update. Tesla setzt auch auf Schwarmintelligenz, die
      Telemetriedaten werden anonymisiert an die Tesla Cloud geschickt. Bremsen
      viele Fahrer in einer Kurve auf 35 km/h ab, merkt sich das der Autopilot
      und gibt dem Fahrer einen Hinweis.
    </p>
    <h3>Komfort</h3>
    <p>
      Teilst Du dem Betriebssystem Deinen Termin mit, wärmt es den Innenraum vor
      Antritt der Fahrt für Dich vor. Über das Verkehrsgeschehen, Route und
      Cloud-Anbindung kennt Dein Auto Deine Abfahrtszeit. Über Deine App kannst
      Du auch Dein Auto orten oder die Reichweite überprüfen. Oder Du hörst im
      Premium-Audiosystem Deine Lieblingsmusik. Diese Features der neuen
      Mobilität faszinieren uns.
    </p>
    <h3>Langläufer</h3>
    <p>
      Die Antriebseinheit des Teslas ist dafür ausgelegt,{' '}
      <b>1,6 Millionen Kilometer wartungsfrei zu laufen</b>. Das liegt auch
      daran, dass ein E-Auto technisch einfacher als ein Verbrennungsmotor ist.
      Das Getriebe z.B. entfällt hier, möchte der Fahrer rückwärtsfahren, dreht
      sich der Motor einfach in die andere Richtung. Der Antrieb liegt kompakt
      zwischen den Rädern und verbindet Elektromotor, Getriebe und den
      Wechselrichter. Anfangs experimentierte Musk mit Zweigang-Getrieben, da
      die Beschleunigung von 100 auf 200 km/h damit besser wäre. Leider war kein
      Hersteller in der Lage, ein langlebiges Getriebe zu liefern.
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
      Generation zur Verfügung. In Deutschland gibt es 69 Standorte (Stand
      Januar 2019). Es wird für alle europäischen Ladestationen laut Tesla,
      Ökostrom gekauft. Weltweit gibt es 13.000 Super-Charger-Anschlüsse.
      Innerhalb kurzer Zeit lädt der Akku halb voll und die Reise geht weiter,
      denn das reicht bis zum nächsten Stopp.
      <br />
      <br />
      Wir als Verleiher bevorzugen erneuerbare Energien und haben eine
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
      Sightseeing-Tour durch Stuttgart. Kauf Deine Tickets am besten Online.
      Anschließend empfehlen wir eine Zeitreise zum Schloss Solitude von Herzog
      Carl Eugen. Die herausragende Architektur mit ihrem herrlichen Ausblick
      über Stuttgart fasziniert Dich sicherlich. Der Stromer kann bequem in
      Laufentfernung geparkt werden. Besuch auch die Triberger Wasserfälle im
      140 km entfernten Triberg. So kannst Du den gemieteten Tesla auf der
      Autobahn richtig testen und die Beschleunigung spüren.
    </p>
    <h3>Ludwigsburg</h3>
    <p>
      Empfehlenswert ist ein Abstecher in das am Anfang des 18. Jahrhunderts
      gegründeten Ludwigsburg. Wenn Du dort das größte und auch noch im Original
      erhaltene Barockschloss Deutschlands erleben möchtest, findest Du weitere
      Informationen bei der{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://www.schloss-ludwigsburg.de/"
      >
        Schlossverwaltung Ludwigsburg
      </a>
      {'. '}
      Eine kurvenreiche Strecke durch den Wald genießt Du bei der Rundfahrt ab
      Ludwigsburg über Sulzbach an der Murr, Spiegelberg, Löwenstein, Mainhardt,
      Pfedelbach, Obersteinbach, Michelfeld, Murrhardt und wieder zurück. Eine
      tolle Strecke zum cruisen.
    </p>
    <h3>Autonomes Fahren</h3>
    <p>
      In Deutschland ist es noch nicht erlaubt, ohne Hände am Steuer zu fahren,
      doch technisch gesehen kann der Tesla ohne menschliche Lenkbefehle
      auskommen. Dabei zeigt er auf dem Display an, woran sich das Auto
      orientiert. Die Elemente, wie z.B. die Straßenmarkierung ist dann blau
      eingefärbt. Ein Spurwechsel ist keine Herausforderung. Wenn die
      Straßenmarkierung bei einer Baustelle fehlt, hängt sich der Tesla einfach
      an das vorausfahrende Auto. Technisch ist dieses Feature schon sehr
      ausgereift, was dieses{' '}
      <a
        rel="noopener noreferrer"
        target="_blank"
        href="https://vimeo.com/192179726"
      >
        Video
      </a>{' '}
      zeigt. Man kann sogar das Auto auf Zuruf <b>autonom einparken</b> lassen.
    </p>
    <h3>Kein Zwischenvertrieb</h3>
    <p>
      Tesla gewährt keine Rabatte und vertreibt seine Autos direkt. Das hat den
      Vorteil die Rabatte über die hauseigene Werkstatt nicht wieder
      zurückverdienen zu müssen. Um das Elektrofahrzeug vor dem Kauf ausgiebig
      zu testen, bietet es sich an, eines in unserer Autovermietung zu leihen.
      Wir als Vermieter empfehlen einen Monat, als Mietzeit zu buchen, dann sind
      die Tarife günstiger und desto besser kannst Du alles ausprobieren und
      testen. Die Elektro-Autobauer sind eben nicht durchschnittlich, eher
      großartig. Die Begeisterung bringt die Tesla Emotion voll zum Ausdruck.
      Leihen Sie einen atemberaubenden Tesla und erhalten Sie ein stilvolles
      E-Fahrzeug mit einer unglaublichen Beschleunigung. Der Mietpreis des
      Elektroautos sinkt, desto länger sie es mieten. Wir beraten Sie gerne.
      Wählen Sie jetzt unverbindlich die Telefonnummer unserer E-Auto-Vermietung
      und erwarten Sie allerhöchsten Service. Die Anmietung ist einfach und
      schnell.
    </p>
  </div>
)

const FeatureSection = () => (
  <div className="mx-auto">
    <div className="gap-x-4 gap-y-8 lg:grid lg:grid-cols-2">
      <div className="mx-auto prose lg:prose-md">
        <h2>Verknüpfung Tesla App</h2>
        <p>
          Wir richten die Tesla-App auf Deinem Handy ein und erklären Dir die{' '}
          <b> interessanten Funktionen</b>. Genieße sofort Deine{' '}
          <b>Lieblingsmusik</b>. Oder verknüpfe Deinen <b>Kalender</b> und lass
          den Innenraum vor der Fahrt <b>aufwärmen</b>. Erlebe Elektromobilität
          von heute.
        </p>
      </div>

      <div className="mx-auto prose lg:prose-md">
        <h2>Bester Service </h2>
        <p>
          Wir haben Zeit für Dich und Deine Fragen. Bei uns ist eine
          <b> umfangreiche Einweisung</b> mit <b>praxisnahen Hinweisen</b>
          <b> inklusive einer Probefahrt</b> immer enthalten. Selbstverständlich
          kannst Du uns zu den Öffnungszeiten telefonisch erreichen.
        </p>
      </div>

      <div className="mx-auto prose lg:prose-md">
        <h2 id="kundenzufriedenheit">Zufriedene Kunden</h2>

        <p className="">
          Kunden, die bei unserem Tesla-Verleih ein Elektroauto gemietet haben,
          waren <b> sehr zufrieden</b>. Sieh selbst und lies unbedingt die{' '}
          <a
            href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Rezensionen
          </a>{' '}
          unserer Kunden.
        </p>

        <GoogleBewertungen />
      </div>
    </div>
  </div>
)

function IndexPage() {
  return (
    <div>
      <SEO
        title="Tesla mieten in Stuttgart | Elektromobilität | Autovermietung"
        description="Tesla Model X | Tesla Model 3 | Elektroauto Tesla mieten in Stuttgarter Autovermietung ✓ Elektromobilität ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +4971149066450"
      />
      <Head
        script={[
          helmetJsonLdProp({
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
          }),
        ]}
      />
      <Head
        script={[
          helmetJsonLdProp({
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
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '5.0',
              ratingCount: '10',
            },
            review: [
              {
                '@type': 'Review',
                author: 'Ste Ke',
                datePublished: '2020-03-11',
                description:
                  'Perfekt - super freundlich, top Service, einfach eine tolle Erfahrung!',
                reviewRating: {
                  '@type': 'Rating',
                  bestRating: '5',
                  ratingValue: '5',
                  worstRating: '1',
                },
              },
              {
                '@type': 'Review',
                author: 'OLIVER Schindele',
                datePublished: '2020-01-02',
                description:
                  'Es war eine tolle Erfahrung. Ich durfte eine Woche lang das Model 3 Performance testen. Der Kontakt per E-Mail war schnell und ausführlich. Man merkt, für die Jungs ist es mehr als nur eine Arbeit! Sie leben die E-Mobilität! Die Übergabe und die Fahrzeugrücknahme waren sehr angenehm und unkompliziert. Meine Fragen wurden, auch nach der Rückgabe, schnell und ausführlich beantwortet. Es gab keine versteckten Kosten oder Einschränkungen. Auch ein Ausflug nach Österreich war kein Problem. Die Sache hat nur einen Nachteil! Ich möchte jetzt auch einen eigenen Tesla!',

                reviewRating: {
                  '@type': 'Rating',
                  bestRating: '5',
                  ratingValue: '5',
                  worstRating: '1',
                },
              },
              {
                '@type': 'Review',
                author: 'Valentina Hütten',
                datePublished: '2019-12-12',
                description:
                  'Herr Weißleder ist ein Experte auf dem Gebiet der Elektromobilität. Freundlich, kompetent und verlässlich! Vielen Dank für die tolle Zusammenarbeit!',

                reviewRating: {
                  '@type': 'Rating',
                  bestRating: '5',
                  ratingValue: '5',
                  worstRating: '1',
                },
              },
              {
                '@type': 'Review',
                author: 'Thomas Luz',
                datePublished: '2019-12-10',
                description:
                  'Das Mietfahrzeug war außen wie innen sehr sauber. Alle meine Fragen rund um das Thema Elektromobilität und Mietfahrzeug wurden ausführlich und kompetent beantwortet, selbst nach Rückgabe des Autos. Es wird sehr angenehm und freundlich mit dem Kunden umgegangen.',

                reviewRating: {
                  '@type': 'Rating',
                  bestRating: '5',
                  ratingValue: '5',
                  worstRating: '1',
                },
              },
            ],
            priceRange: 'ab 31,63 €',
            description:
              'Tesla Model X | Tesla Model 3 | Tesla mieten in Stuttgarter E-Autovermietung ✓ Elektromobilität erleben ► Mo-Fr von 8-18 Uhr | Jetzt anfragen ☎ +4971149066450',
          }),
        ]}
      />
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
  )
}

export default IndexPage
