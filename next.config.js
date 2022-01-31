const { ENVIRONMENT } = require('./src/main_app/constants')
// const { stories } = require('./src/portfolio/stories')

const stories = [{ urlName: 'copa' }]

function generatePortfolioPaths () {
  const paths = {}

  for (const story of stories) {
    paths[`/portfolio/${story.urlName}`] = { page: `/portfolio/${story.urlName}` }
  }

  return paths
}

module.exports = require('next-optimized-classnames')({
  exportPathMap: async function (
    defaultPathMap
  ) {
    return {
      ...defaultPathMap,
      ...generatePortfolioPaths()
    }
  },
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
  }
})
