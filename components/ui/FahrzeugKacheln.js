import Image from "next/image";
import Link from "next/link";

import CTAFahrbereit from "./CTAFahrbereit";

export default function FahrzeugKacheln() {
  return (
    <div className="relative px-4 pt-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-2">
          <Link passHref className="Kachel" href="/tesla/model-3srmieten/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3-sr.png"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3 Standard Range Plus"
                />

                <h2
                  data-cy="KachelModel3SR"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 SR+ mieten ab 32,73 € / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link
            passHref
            className="Kachel"
            href="/tesla/model-3-long-range-mieten/"
          >
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3-lr.jpg"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3 Standard Range Plus"
                />

                <h2
                  data-cy="KachelModel3LR"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 Long Range mieten ab 44,63 € / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link passHref className="Kachel" href="/tesla/model-3-mieten/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  src="/images/cards/tesla-3-performance.png"
                  height="300"
                  width="600"
                  className="h-72 w-full object-cover"
                  alt="Tesla Model 3 Performance mieten"
                />

                <h2
                  data-cy="KachelModel3Performance"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model 3 Performance mieten ab 50,58 € / Tag
                </h2>
              </div>
            </div>
          </Link>
          <Link passHref className="Kachel" href="/tesla/model-x-mieten/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-model-x.png"
                  alt="Tesla Model X mieten"
                />

                <h2
                  data-cy="KachelModelX"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Model X mieten ab 74,38 € / Tag
                </h2>
              </div>
            </div>
          </Link>

          <Link passHref className="Kachel" href="/tesla-langzeitmiete/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/rental.jpg"
                  alt="Tesla Langzeitmiete"
                />

                <h2
                  data-cy="KachelLangzeit"
                  className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white"
                >
                  Tesla Langzeitmiete vs. Leasing
                </h2>
              </div>
            </div>
          </Link>
          <CTAFahrbereit />
          <Link passHref className="Kachel" href="/faq/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/faq.png"
                  alt="FAQ Elektroautos"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Häufig gestellte Fragen (FAQ)
                </h2>
              </div>
            </div>
          </Link>

          <Link passHref className="Kachel" href="/faq/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/tesla-ladestation.jpg"
                  alt="Tesla aufladen"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Wo kann ich meinen Tesla laden?
                </h2>
              </div>
            </div>
          </Link>
          <Link passHref className="Kachel" href="/schulung-elektromobilitaet/">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Image
                  className="h-72 w-full object-cover"
                  height="300"
                  width="600"
                  src="/images/cards/schulung.jpg"
                  alt="Schulung über Elektromobilität"
                />

                <h2 className="static box-border rounded-b bg-itana-red px-1 text-center text-lg text-white">
                  Schulung Elektromobilität
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
