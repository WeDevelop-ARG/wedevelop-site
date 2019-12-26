const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = require('./src/paths').default.map(r => r.path).filter(p => !p.match(/\*/))

module.exports = {
  publicPath: '',
  configureWebpack: {
    plugins: [
      new SitemapPlugin('https://wedevelop.me/', paths, {
        fileName: 'sitemap.xml',
        lastMod: true,
        changeFreq: 'monthly'
      })
    ]
  }
}
