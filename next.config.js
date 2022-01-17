const withPWA = require('next-pwa')

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
]

module.exports = withPWA({
  env: {
    API_KEY: process.env.API_KEY,
  },
  trailingSlash: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: false,
    skipWaiting: false,
  },
  async headers() {
    return [
      {
        source: '/fonts/inter-var-latin.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/mobility/',
        destination: '/tesla-supercharger-leonberg/',
        permanent: true,
      },
      {
        source: '/comments/:slug*/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/:slug*/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fahrzeuge/:slug*/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/page-data/:slug*/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/itana-fahrzeuge-und-preise/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/impressum/',
        destination: 'https://itana.de/impressum/',
        permanent: false,
      },

      {
        source: '/.well-known/apple-app-site-association/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/apple-app-site-association/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tesla-model-x/',
        destination: '/tesla/model-x-mieten/',
        permanent: true,
      },
      {
        source: '/tesla-model-3-performance/',
        destination: '/tesla/model-3-mieten/',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/2013/12/p-project1-03.jpg',
        destination: '/',
        permanent: true,
      },

      {
        source: '/component/tags/tag/hyundai-kona/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/10-fahrzeuge/7-hyundai-kona-elektro/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/component/tags/tag/hyundai-kona/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/model-s/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fahrzeuge/hyundai-kona-elektro/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fahrzeuge/tesla-model-x/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fahrzeuge/tesla-model-3/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/dual-motor/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/fahrzeuge/hyundai-kona-elektro-150kw/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/fahrzeuge/tesla-model-3-performance/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/e-go-life/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/comments/feed/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/index.php/8-elektromobilitaet/3-home/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/model-x/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/component/tags/tag/e-go-life/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php/component/tags/tag/supercharger/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/datenschutz/',
        destination: 'https://itana.de/datenschutz/',
        permanent: false,
      },
      {
        source: '/index.php/component/tags/tag/supercharger/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/component/tags/tag/tesla/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/id-3/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/.well-known/apple-app-site-association/',
        destination: '/',
        permanent: true,
      },

      {
        source: '/component/tags/tag/ccs/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/itana-fahrzeuge-und-preise/tesla-model-x/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/component/tags/tag/supercharger/',
        destination: '/',
        permanent: true,
      },
    ]
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    return config
  },
})
