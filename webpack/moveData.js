


const fs = require('fs')
const path = require('path')

const resource_path = '/Users/dong/develop/link/link/lib'
const destPath = path.join(__dirname,'../article')
const dirs = fs.readdirSync(resource_path)


const cp = (resource,dest) =>{
	fs.createReadStream(resource).pipe(fs.createWriteStream(dest))
}

dirs.forEach(dir =>{
	const mdFile = path.join(resource_path,dir,'index.md')
	if(fs.existsSync(mdFile)){
		cp(mdFile,path.join(destPath,`${dir}.md`))
	}
})