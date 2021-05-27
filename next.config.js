module.exports = {
  target: 'serverless',
  env: {
    API_KEY: process.env.API_KEY
  },
  future: {
    webpack5: true
  },
  trailingSlash: true,
  async headers() {
    return [
      {
        source: '/fonts/inter-var-latin.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true
      }
    ]
  }
}
