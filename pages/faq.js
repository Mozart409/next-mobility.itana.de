import Head from 'next/head';

import SEO from '@/ui/seo';

function Display(items) {
  return (
    <div className="mt-6 space-y-6 pt-6 text-lg">
      {items.map(item => (
        <details
          className="rounded-lg p-4 open:bg-neutral-100 open:shadow-lg open:shadow-itana-red/20"
          key={item.id}
        >
          <summary className="text-lg font-semibold leading-6">
            {item.question}
          </summary>
          <div className="mt-3">
            <p className="text-md leading-6 text-gray-600">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}

function Collapse() {
  const items = [
    {
      id: 1,
      question: 'Warum sollte ich bei Itana einen Tesla mieten?',
      answer:
        'Weil wir Ihnen das Rundum-Sorglos Paket zum Top-Preis anbieten. Sie bekommen eine Einweisung von ca. 1/2 - 1 Stunde in der alle Ihre Fragen geklärt werden. Unsere Kunden sind von unserem Service und unserem Know-How begeistert.',
    },
    {
      id: 2,
      question: 'Gibt es eine Kaution? Muss ich Bar-Geld mitbringen?',
      answer: 'Nein.',
    },
    {
      id: 3,
      question: 'Kann ich die Mietdauer verlängern?',
      answer:
        'Ja. Kontaktieren Sie uns und wir versuchen unser Möglichstes, die Mietdauer zu verlängern.',
    },
    {
      id: 4,
      question: 'Muss ich den Mietwagen zu 100% geladen wieder abgeben?',
      answer:
        'Nein, wir bitten jedoch um eine Restladung von 50%, nach Abstimmung mit uns auch weniger.',
    },
    {
      id: 5,
      question: 'Was ist, wenn das Elektroauto einen Schaden hat?',
      answer:
        'Bei der Übergabe schauen wir das E-Auto gemeinsam an und dokumentieren alle Schäden.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-6xl font-black tracking-tight text-gray-900">
          Häufig gestellte Fragen
        </h1>
        <div>
          <h2 className="text-4xl font-black">Wie, wo und warum? </h2>
          {Display(items)}
        </div>
      </div>
    </div>
  );
}

function CollapseVersicherung() {
  const items = [
    {
      id: 1,
      question: 'Wie bin ich versichert?',
      answer:
        'Sie können zwischen einer Vollkasko-Versicherung mit Selbstbeteiligung von 2500€ / 1000€ oder 500€ wählen. Je nach Wunsch kann also die Haftungsreduzierung eingeschränkt werden.',
    },
    {
      id: 2,
      question: 'Ist der Track Modus erlaubt?',
      answer: 'Nein.',
    },
    {
      id: 3,
      question: 'Ab wie vielen Jahren darf man den Tesla ausleihen?',
      answer: 'Ab 28 Jahren.',
    },
    {
      id: 4,
      question: 'Darf ich mit dem Tesla ins Ausland fahren?',
      answer: 'Auf Anfrage ist die Fahrt ins Ausland möglich.',
    },
    {
      id: 5,
      question: 'Darf ich mit dem Tesla ins Ausland fahren?',
      answer: 'Auf Anfrage ist die Fahrt ins Ausland möglich.',
    },
    {
      id: 6,
      question:
        'Wie kann ich erkennen, welche Bereifung (Winter-/Sommerreifen) mein Mietfahrzeug hat?',
      answer:
        'Wir übergeben Ihnen das Fahrzeug stets mit saisonal geeigneter Bereifung, d.h. sie müssen bei uns auch nicht mit Winter- oder Ganzjahresreifen durch den Sommer fahren – versprochen! Bei Langzeitmiete tauschen wir für Sie die Räder zum geeigneten Zeitpunkt.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-4xl font-black">Versicherung </h2>
        <div className="mt-6 cursor-pointer border-t-2 border-gray-200 pt-6 text-lg">
          {Display(items)}
        </div>
      </div>
    </div>
  );
}

function CollapseLeben() {
  const items = [
    {
      id: 1,
      question: 'Mit dem gemieteten Tesla in den Urlaub fahren?',
      answer:
        'Warum nicht mit einem Tesla in den Urlaub fahren? Mieten Sie Ihren Wunsch-Tesla und probieren Sie in Ruhe alles aus. Sie werden schnell feststellen, dass es wirklich Spaß macht, zeitgemäß und sportlich zu reisen.',
    },
    {
      id: 2,
      question: 'Darf ich meinen Hund mitnehmen?',
      answer:
        'Hunde oder Katzen müssen in der Transportbox gesichert werden. Bei starker Verunreinigung mit Tierhaaren müssen wir wegen Allergiegefahr eine Reinigungsgebühr von 100€ in Rechnung stellen.',
    },
    {
      id: 3,
      question: 'Kann ich in jeder Innenstadt kostenlos parken?',
      answer:
        'Nein, hier gibt es keine einheitliche Linie. Bitte informieren Sie sich entsprechend bei Ihrer Stadt. Derzeit frei: Stuttgart, Waiblingen, Ludwigsburg, Esslingen, Schwäbisch-Gmünd, Böblingen, Sindelfingen, Ettlingen, Baden-Baden, Landau in der Pfalz.',
    },
    {
      id: 4,
      question: 'Darf ich im Auto rauchen?',
      answer: 'Nein.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-4xl font-black">Rund ums Leben </h2>
        {Display(items)}
      </div>
    </div>
  );
}

function CollapseAufladen() {
  const items = [
    {
      id: 1,
      question: 'Wo und wie lade ich den Tesla auf?',
      answer:
        'Aufladen können Sie den Tesla überall, z.B. beim Parken, am Arbeitsplatz, unterwegs oder zu Hause an der Schuko-Steckdose. Tesla zeigt Ihnen die Verfügbarkeit von Superchargern direkt im Display des Fahrzeugs an. Drittanbieter zeigen die Verfügbarkeit leider nur teilweise in deren Smartphone Apps an. Sollten Sie Fragen zum Thema Aufladen haben , sprechen Sie uns gerne an.',
    },
    {
      id: 2,
      question: 'Wie weit kann ich mit meinem Tesla fahren?',
      answer:
        'Mit dem Tesla Model X haben Sie eine von Reichweite: 565 km (NEFZ) und mit dem Tesla Model 3 eine von Reichweite: 530 km (WLTP). Unsere Erfahrungen zeigen, dass bei einer durchschnittlichen Fahrweise die Reichweite darunter liegt.',
    },
    {
      id: 3,
      question: 'Welche Kraftstoffkosten entstehen für 100 km Fahrt',
      answer:
        'Strompreise an öffentlichen Ladesäulen variieren sehr stark. Bei der Nutzung von Haushaltsstrom sollte man von rund 5 Euro je 100km für den Hyundai Kona bzw. das Tesla Model 3 ausgehen, sowie von rund 7 Euro für das Model X.',
    },
    {
      id: 4,
      question: 'Sind sogenannte ChargingCards im Mietpreis enthalten?',
      answer:
        'Nein, wir beraten Sie jedoch gerne im Vorfeld der Anmietung über die gängigsten Anbieter und unterstützen Sie bei der Beschaffung, sowie bei der Einrichtung und Verwendung entsprechender Smartphone-Apps.',
    },
    {
      id: 5,
      question:
        'Wie kann ich die Reichweite aktueller Elektrofahrzeuge einschätzen?',
      answer:
        ' Die tatsächliche Reichweite kann von den offiziellen Angaben des Herstellers abweichen. Die Reichweite ist in erster Linie abhängig von Faktoren wie der Temperatur und dem Wetter. Die individuelle Fahrweise und das Streckenprofil sind ebenfalls relevante Faktoren und haben Auswirkung auf die Reichweite. Die Reichweite ist am höchsten bei moderater, vorausschauender Fahrweise. Bei vernünftiger und doch zügiger Fahrweise ohne Vollgasetappen sind mit einer vollen Ladung Distanzen von 300km Autobahn oder 400km Landstraße realisierbar. Da unsere Fahrzeuge sehr leistungsstark, und gleichzeitig effizient sind hat der Fahrer den Haupteinfluss auf die Reichweite: So kann die Reichweite mit Dauervollgas deutlich unter 200 km reduziert werden, oder auch im Sommer bei gemütlicher Fahrweise gestreckt werden.',
    },
    {
      id: 6,
      question: 'Wie ist der Verlauf der Ladekurve?',
      answer:
        'Startet das Laden, lädt die Batterie anfangs sehr schnell auf. Desto voller der Akku ist, desto länger dauert es. Übrigens: Pausen erhöhen die Fahrsicherheit und schonen den Rücken.',
    },
    {
      id: 7,
      question: 'Verlieren die Akkus im Lauf der Zeit an Leistung?',
      answer:
        'Tesla hat sehr viel Entwicklungsarbeit in die Batterie gesteckt. Es kann davon ausgegangen werden, dass der gesamte elektrische Antriebsstrang langlebiger ist als der eines Verbrenners. Ein Leistungsverlust ist daher wesentlich geringer als bei Smartphones. Nach 8 Jahren sollten bei üblicher Nutzung noch mehr als 85% zur Verfügung stehen.',
    },
    {
      id: 8,
      question:
        'Schaffe ich es mit drei Pausen von München nach Hamburg zu fahren?',
      answer:
        'Ja. Planen Sie ihre Stopps am Tesla-Supercharger ein, entspannen Sie sich, tanken Sie Kraft oder gehen Sie etwas essen. In der Zwischenzeit ist der Akku bei ca. 65% - 75%, was völlig ausreicht.',
    },
  ];
  return (
    <div className="mx-auto max-w-4xl py-6 px-4 sm:py-8 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-4xl font-black">Das Elektroauto aufladen</h2>
        {Display(items)}
      </div>
    </div>
  );
}

function FAQPage() {
  return (
    <div>
      <SEO
        title="FAQ | Tesla mieten - Itana GmbH"
        description="Was muss ich beachten wenn ich ein Elektroauto (Tesla) miete? Welchen Service gibt es?"
      />
      <Head>
        <meta charSet="utf-8" />
        <link rel="canonical" href="https://mobility.itana.de/faq/" />

        <script type="application/ld+json">
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
  );
}

export default FAQPage;
