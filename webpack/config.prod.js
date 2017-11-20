var common = require('./config.common')
const fs = require('fs')
const path = require('path')
const SyncMDDataPlugin = require('./SyncMDDataPlugin')


module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)


  fs.readdirSync(redSkull.src).map(dir =>{
  	const fp = path.join(redSkull.src,dir)
  	if(fs.statSync(fp).isDirectory()){
  		webpackConfig.resolve.alias[dir] = path.join(redSkull.src,dir)
  	}
  })
  webpackConfig.plugins.push(new SyncMDDataPlugin())
  
  return webpackConfig
}