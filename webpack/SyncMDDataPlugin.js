/**
 * webpack插件
 *  同步article 下的文件，并且生成一个文件，文件格式为

export default [{
	title:'文章标题'
	createTime:'',
	component:()=>System.import('article/sds.md')
	filePath:''  // 文章路径
}]

 */
const path = require('path')
const fs = require('fs')
const getAllArticle = require('./getAllArticle')
var chokidar = require('chokidar');

const ARTILE_PATH = path.join(__dirname,'../article')
const WRITE_FILE_PATH = path.join(__dirname,'../src/data','article.js')
var chokidar = require('chokidar');
function SyncMDDataPlugin(options) {

}

function articleToCode(article){

	const result = []
	const keys = Object.keys(article)

	keys.forEach((k) =>{
		result.push(`"${k}":${JSON.stringify(article[k])}`)
	})
	result.push(`"component":()=>System.import('article${article.path}.md')`)

	return `
	{
		${result.join(',')}

	}`
}
function getFileContent(fileList){
	let result = []

	if(fileList && fileList.length){
		result = fileList.map(articleToCode)
	}

	return `
	export default [${result.join(',')}]
	`
}
let currentFileConent = ''

Object.assign(SyncMDDataPlugin.prototype, {
    apply(compiler) {
    	function writeData(){
    		const articles = getAllArticle().map(article =>{
            	// article.component = `System.import('article${article.path}.md')`
            	return article
            })

            const content = getFileContent(articles)
            console.log(content == currentFileConent)

            if(content == currentFileConent){
            	return
            }
            currentFileConent = content
            
            fs.writeFileSync(WRITE_FILE_PATH,content,{
            	charset:'utf-8'
            })
    	}
        compiler.plugin('compilation', function() {
            writeData()
        })
        // writeData()
        // watch 
        var watcher = chokidar.watch(ARTILE_PATH,{
        	ignoreInitial:true
        })
        watcher.on('add', writeData).on('unlink',writeData)
    }
})

module.exports = SyncMDDataPlugin
