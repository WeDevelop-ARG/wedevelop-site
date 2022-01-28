const { ENVIRONMENT } = require('./src/main_app/constants')

let imageLoader = {}

if (ENVIRONMENT !== 'development') {
  imageLoader = {
    images: {
      loader: 'cloudinary',
      path: 'https://res.cloudinary.com/wedevelop-site/image/upload'
    }
  }
}

module.exports = {
  ...imageLoader,
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
}
