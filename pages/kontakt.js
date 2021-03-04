import Head from 'next/head'
import Iframe from 'react-iframe'
import Image from 'next/image'
import SEO from '@/ui/seo'
import CTA from '@/ui/CTA'

function KontaktPage() {
  return (
    <div>
      <SEO
        title="Kontakt | Tesla mieten - Itana GmbH"
        description="Können wir Dir bei Deinen Fragen helfen? Kontaktiere uns unverbindlich - wir freuen uns!"
      />
      <Head>
        <link rel="canonical" href="https://itana.de/kontakt/" />
      </Head>

      <div className="mx-auto prose lg:prose-md">
        <h1 className="text-3xl font-bold tracking-tight leading-9 text-gray-900 sm:text-4xl sm:leading-10">
          So finden Sie uns
        </h1>

        <section>
          <div>
            <div>
              <Iframe
                title="Google Maps"
                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.6572191742066!2d9.098110951472483!3d48.90286950542604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799d6c0c4e1f9d5%3A0xa49fe7c8f1996367!2sMaulbronner%20Weg%2033%2C%2071706%20Markgr%C3%B6ningen!5e0!3m2!1sde!2sde!4v1582817225514!5m2!1sde!2sde"
                width="720"
                height="480"
                className="mt-2 border-md sm:max-w-max-content md:max-w-6xl"
              />

              <CTA
                link="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m8!1m2!2m1!1sitana+gmbh!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
                title="Google Maps"
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-4 ">
          <section>
            <Image
              src="/images/joerg.png"
              alt="Jörg Weißleder"
              className="mt-4 w-72 h-auto rounded border-md"
              width="275"
              height="325"
            />
          </section>
          <section>
            <h2>Itana GmbH</h2>
            <p>
              Itana GmbH <br />
              Maulbronner Weg 33
              <br />
              71706 Markgröningen
              <br />
              Telefon:{' '}
              <a href="tel:+4971149066450" className="text-itana-red">
                +49 711 49066 450
              </a>
              <br />
              Telefax: +49 711 49066 455
              <br />
              E-Mail:{' '}
              <a
                href="mailto:mobility@itana.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-itana-red"
              >
                mobility@itana.de
              </a>
              <br />
              <a
                href="https://www.google.de/maps/place/Itana+GmbH/@48.8582288,9.0693609,12z/data=!4m12!1m6!3m5!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!2sItana+GmbH!8m2!3d48.902866!4d9.100305!3m4!1s0x4799d6c0c4e1f9d5:0xdde5218653b7e1f0!8m2!3d48.902866!4d9.100305?hl=de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-itana-red"
              >
                Öffnungszeiten
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default KontaktPage
