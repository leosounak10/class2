const fs=require('fs')
const path=require('path')
const html=path.join(__dirname,'html')
const php=path.join(__dirname,'php')

for(i=1;i<=1000;i++){
    fs.writeFileSync(html+"/new"+i+".html","<h1>THIS IS HTML FILE</h1>")
    fs.writeFileSync(php+"/new"+i+".php","<?php echo('good morning') ?>")

}

fs.readFile(`${html}/new1.html`,'utf-8',(err,item)=>{
    if(err){ console.log("the error is",err)
    }else{
console.log(item)}


})

fs.appendFile(`${php}/new1.php`,".this is a php file",(err)=>{
    if(!err) console.log("updated")
})

fs.rename(`${html}/new1.html`,'old1.html',(err)=>{
    if(!err) console.log("renamed")
})

fs.unlink(`${html}/new2.html`,(err)=>{
    if(!err) console.log("deleted")
})