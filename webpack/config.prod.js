var common = require('./config.common')

module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  return webpackConfig
}