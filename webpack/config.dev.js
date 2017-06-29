var common = require('./config.common')
const fs = require('fs')
const path = require('path')

module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  webpackConfig.devtool = 'source-map'

  fs.readdirSync(redSkull.src).map(dir =>{
  	const fp = path.join(redSkull.src,dir)
  	if(fs.statSync(fp).isDirectory()){
  		webpackConfig.resolve.alias[dir] = path.join(redSkull.src,dir)
  	}
  })

  return webpackConfig
}