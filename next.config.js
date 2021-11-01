module.exports = {
  env: {
    API_KEY: process.env.API_KEY
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
        source: '/mobility/',
        destination: '/tesla-supercharger-leonberg/',
        permanent: true
      }
    ]
  }
}
