/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */
import articles from 'data/article'
import AsyncComponent from 'modules/AsyncComponent'
const articleList = MY_ARTICLE_DATA

import { React, Page } from 'zola'

export default class Index extends Page {
  
  render () {
  	const renderComp = 'input'
    return (
      <div>
      	<ul>
      		{
		      	articleList.map((article,index) =>{

		      		return (
		      			<li key={index}>
		      				<a href={`#/article${article.path}`}>
		      				{article.title}
		      				</a>
		      			</li>
	      			)
		      	})
		      }
      	</ul>
      	<AsyncComponent comFn={articles[0].component()}/>
      </div>
    )
  }
}