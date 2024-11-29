const ex=require("express")
const app=ex()

app.get("/",(req,res)=>{
    res.send(`
        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
        <a href="/login">LOGIN</a>
        <a href="/signup">SIGNUP</a>

    `)

})

app.get("/home",(req,res)=>{
    res.send("<h1>THIS PAGE IS HOME PAGE</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>THIS PAGE IS ABOUT PAGE</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>THIS PAGE IS CONTACT PAGE</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>THIS PAGE IS LOGIN PAGE</h1>")
})
app.get("/signup",(req,res)=>{
    res.send("<h1>THIS PAGE IS SIGNUP PAGE</h1>")
})

app.listen(7000)