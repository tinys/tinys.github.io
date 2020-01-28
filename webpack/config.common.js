var path = require('path')

module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  Object.assign(webpackConfig.resolve.alias, {
    zola: '@lianjia/zola-core',

    modules: path.join(redSkull.src, 'modules'),
    apis: path.join(redSkull.src, 'apis'),
    pages: path.join(redSkull.src, 'pages')
  })

  return webpackConfig
}