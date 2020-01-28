/**
 *  === page ===
 *
 *  created at: Tue Jun 27 2017 18:27:29 GMT+0800 (CST)
 */

import { React, Page } from 'zola'
// import ArticleMap  from 'data/article'
import AsyncComponent from 'modules/AsyncComponent'
import ArticleRender from 'modules/ArticleRender'
export default class Index extends Page {

  render () {
  	const filePath = this.props.params.path
  	const path = `/article/${filePath}.md`
    return (
      <div>
      	<ArticleRender articlePath={path}/>
      </div>
    )
  }
}