const { ENVIRONMENT } = require('./src/main_app/constants')

module.exports = require('next-optimized-classnames')({
  experimental: { optimizeCss: true },
  images: ENVIRONMENT !== 'development'
    ? {
        loader: 'cloudinary',
        path: 'https://res.cloudinary.com/wedevelop-site/image/upload'
      }
    : undefined,
  assetPrefix: ENVIRONMENT !== 'development' ? '/assets-' + ENVIRONMENT : '',
  webpack (config) {
    for (const rule of config.module.rules) {
      if (rule.test?.test('file.svg')) {
        rule.test = new RegExp('(?<!\\.component)' + rule.test.source, rule.test.flags)
      }
    }

    config.module.rules.push({
      test: /\.component\.svg$/i,
      use: [{
        loader: '@svgr/webpack',
        options: {
          ref: true
        }
      }]
    })

    return config
  },
  async rewrites () {
    if (ENVIRONMENT !== 'production') return []

    return [
      {
        source: '/events-in-2023-research-form',
        destination: '/events-in-2023-research-form.html'
      }
    ]
  }
})
