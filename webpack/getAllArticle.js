/**
 * 获取所有markdown文件的数据
 * 
 */
const fs = require('fs')
const path = require('path')

const ARTICLE_PATH = path.join(__dirname,'..','article')

const getAllMarkdownFile = function(filePath){
  /*
  1. 挨个查找文件
   */
  function walkFile(filePath){
    const stat = fs.statSync(filePath)
    let result = []
    if(stat.isDirectory()){
      // read dirs
      const dirs = fs.readdirSync(filePath)
      dirs.forEach(p =>{
        const myPath = path.join(filePath,p)
        const pStat = fs.statSync(myPath)
        if(pStat.isDirectory()){
          result = result.concat(walkFile(myPath))
        }else{
          result.push(myPath)
        }
      })
    }else{
      result.push(filePath)
    }
    return result
  }

  /**
   * 2. 过滤markdown文件
   * 
   */
  const markdownFile = walkFile(filePath).filter((p)=>{
    const extname = path.extname(p) // .md
    return extname.toLowerCase() == '.md'
  })
   /**
    * 读取所有文件内容，查找文件内容里面标示的创建时间，如果没有，默认为今天
    * 
    */
   const result = markdownFile.map((file) =>{
      const content = fs.readFileSync(file,{
        charset:'utf-8'
      }).toString()

      const defaultDate = new Date()
      const createTimeStr = content.split('\n').find(str =>{
        if(str.indexOf('createTime') >=0){
          return true
        }
        return false
      }) || ``
      // }) || `:${defaultDate.toLocaleDateString()} ${defaultDate.toLocaleTimeString()}`
      
      const createTimeArr = createTimeStr.split(':')
      createTimeArr.shift()
      const createTime = createTimeArr.join(":").trim()
      const fileName = path.basename(file,'.md')
      const filePath = file.replace(ARTICLE_PATH,'')
      return {
        title:fileName,
        path:filePath.replace('.md',''),
        createTime
      }
   })

   /**
    * 按照时间从大到小排序
    */
   return result.sort((a1,a2) =>{
    return a2.createTime - a1.createTime
   })
}


module.exports = function(redskull, env) {
  
  const list = getAllMarkdownFile(ARTICLE_PATH)

  /*
  [
    {
      title:'',
      createTime:'',
    }
  ]
  */
  return list
}
