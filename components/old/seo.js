import { graphql, useStaticQuery } from 'pages/tesla/node_modules/gatsby'

import Head from 'next/head'

function SEO ({ description, lang, meta, keywords, title }) {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  const metaDescription = description || data.site.siteMetadata.description

  return (
    <Head
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={''}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', ')
              }
            : []
        )
        .concat(meta)}
    ></Head>
  )
}

SEO.defaultProps = {
  lang: 'de',
  meta: [],
  keywords: []
}

export default SEO
