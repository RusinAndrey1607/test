const express = require("express")

const app = express()
app.get("/",(req,res) =>{
    res.send("Working")
})
app.listen(8000,() =>{
    console.log("server working on port ",8000);
})