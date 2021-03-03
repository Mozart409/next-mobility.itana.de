import { Link, graphql, useStaticQuery } from 'pages/tesla/node_modules/gatsby'
import Img from 'pages/tesla/node_modules/gatsby-image'
import CTAFahrbereit from './CTAFahrbereit'
import hkl from '@/data/hkl'

export default function FahrzeugKacheln() {
  const data = useStaticQuery(graphql`
    {
      Card1: file(relativePath: { eq: "cards/tesla-3-performance.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      Card3SR: file(relativePath: { eq: "cards/tesla-3-sr.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      Card2: file(relativePath: { eq: "cards/rental.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300, cropFocus: SOUTH) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      Card3: file(relativePath: { eq: "cards/tesla-model-x.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300, cropFocus: CENTER) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }

      Card5: file(relativePath: { eq: "cards/tesla-ladestation.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      CardFAQ: file(relativePath: { eq: "cards/faq.png" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      Schulung: file(relativePath: { eq: "cards/schulung.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      PreisT3P: t3PJson(Typ: { eq: "1" }, Art: { eq: "K" }) {
        Preis
      }
      PreisTXL: txlJson(Art: { eq: "K" }, Typ: { eq: "1" }) {
        Preis
      }
      PreisHKL: hklJson(Art: { eq: "K" }, Typ: { eq: "1" }) {
        Preis
      }
    }
  `)

  return (
    <div className="relative px-4 pt-4 pb-20 sm:px-6 lg:pb-28 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-5 mx-auto max-w-lg lg:grid-cols-2 lg:max-w-none">
          <Link
            data-cy="KachelModel3SR"
            className="Kachel"
            href="/tesla/model-3srmieten/"
          >
            {' '}
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Card3SR.childImageSharp.fluid}
                  alt="Tesla Model 3 Standard Range Plus"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Tesla Model 3 SR+ mieten ab {data.PreisHKL.Preis}
                  {' €'}
                </h2>
              </div>
            </div>{' '}
          </Link>
          <Link
            className="Kachel"
            data-cy="KachelModel3Performance"
            href="/tesla/model-3-mieten/"
          >
            {' '}
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl ">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Card1.childImageSharp.fluid}
                  alt="Tesla Model 3 Performance mieten"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red ">
                  Tesla Model 3 Performance mieten ab {data.PreisT3P.Preis}
                  {' €'}
                </h2>
              </div>
            </div>{' '}
          </Link>
          <Link
            data-cy="KachelModelX"
            className="Kachel"
            href="/tesla/model-x-mieten/"
          >
            {' '}
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Card3.childImageSharp.fluid}
                  alt="Tesla Model X mieten"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Tesla Model X mieten ab {data.PreisTXL.Preis}
                  {' €'}
                </h2>
              </div>
            </div>{' '}
          </Link>

          <Link className="Kachel" href="/tesla-langzeitmiete/">
            {' '}
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Card2.childImageSharp.fluid}
                  alt="Tesla Langzeitmiete"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Tesla Langzeitmiete vs. Leasing
                </h2>
              </div>
            </div>{' '}
          </Link>
          <CTAFahrbereit />
          <Link className="Kachel" href="/faq/">
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover h-72 kw-full"
                  fluid={data.CardFAQ.childImageSharp.fluid}
                  alt="FAQ Elektroautos"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Häufig gestellte Fragen (FAQ)
                </h2>
              </div>
            </div>{' '}
          </Link>

          <Link className="Kachel" href="/faq/">
            {' '}
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Card5.childImageSharp.fluid}
                  alt="Tesla aufladen"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Wo kann ich meinen Tesla laden?
                </h2>
              </div>
            </div>{' '}
          </Link>
          <Link className="Kachel" href="/schulung-elektromobilitaet/">
            <div className="flex overflow-hidden flex-col rounded-lg shadow-2xl">
              <div className="flex-shrink-0">
                <Img
                  fadeIn={false}
                  loading="eager"
                  className="object-cover w-full h-72"
                  fluid={data.Schulung.childImageSharp.fluid}
                  alt="Schulung über Elektromobilität"
                />

                <h2 className="static px-1 text-lg text-center text-white rounded-b box-border bg-itana-red">
                  Schulung Elektromobilität
                </h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
