var common = require('./config.common')
const fs = require('fs')
const path = require('path')
const SyncMDDataPlugin = require('./SyncMDDataPlugin')

module.exports = function (webpackConfig, redSkull, webpackPlugins) {

  webpackConfig = common(webpackConfig, redSkull, webpackPlugins)

  // webpackConfig.devtool = 'source-map'

  fs.readdirSync(redSkull.src).map(dir =>{
  	const fp = path.join(redSkull.src,dir)
  	if(fs.statSync(fp).isDirectory()){
  		webpackConfig.resolve.alias[dir] = path.join(redSkull.src,dir)
  	}
  })

  webpackConfig.resolve.alias['article'] = path.join(process.cwd(),'article')

  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'babel-loader',
    query: {
      'presets': [
        require(path.join(redSkull.redSkullRoot,'src/babel/fe-present'))({
          strictMode:true
        })
      ],
      'compact': true,
      cacheDirectory: true
    }
  })

  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: 'markdown-loader'
  })
  

  webpackConfig.resolveLoader.modules.push(path.join(process.cwd(),'webpack/loader'))
  webpackConfig.plugins.push(new SyncMDDataPlugin())

  return webpackConfig
}