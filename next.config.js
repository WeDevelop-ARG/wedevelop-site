module.exports = {
  webpack(config) {
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
