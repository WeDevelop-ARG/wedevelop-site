const { ENVIRONMENT } = require('./src/main_app/constants')

module.exports = require('next-optimized-classnames')({
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/wedevelop-site/image/upload'
  },
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
  }
})
