const express=require('express')
const app=express()

app.get("/json",(req,res)=>{
    res.send([
        {"name":"puja","roll":1},
        {"name":"raja","roll":2},
        {"name":"goja","roll":3}
    ])
})

app.listen(6009)
    