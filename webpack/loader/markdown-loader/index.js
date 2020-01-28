const showdown = require('showdown')
// var babel = require("babel-core");
module.exports = function(content,map) {
	this.cacheable && this.cacheable()



	/*
	1. content -> html
	2. html -> jsx
	3. jsx -> js
	 */
	
	const converter = new showdown.Converter()
	converter.setOption('tables', true)
	content   = converter.makeHtml(content)
	  			

	// this.value = content;
	/*
	import React,{Component} from 'react'
	export default class extends Component{
	
		render(){
	
			return (
				content
			)
		}
	}

	``
	 */
	// {  => {'{'} } => {'}'}
	/*
	[
		{tag:'div':child:[{tag:'sds'},'sdadasd']}
	]
	 */
	// const contentData = JSON.stringify(htmlParse(content))

	// React.createElement('', props, children)
	content = `
		import React,{Component} from 'react'
		import ReactHtmlParser from 'react-html-parser'
		export default class extends Component{
		
			render(){
				return (
					<div>
					{ ReactHtmlParser(${JSON.stringify(content)}) }
					</div>
				)
			}
		}
	`
	
	// 
	// return JSON.stringify(content)
	this.callback(null, content,map);
	
}
module.exports.seperable = true;