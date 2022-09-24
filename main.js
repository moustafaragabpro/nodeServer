const express = require("express");

const app = express() ;

app.get('/' , (req , res) => {
    // res.write(`<h1>Hello there</h1>`)
    // res.send(`<h1>Hello there</h1>`)
    // res.send(`<h1>Home Page</h1>`);
    res.json({message : 'this is a message'});
    // res.download("main.js");
    // res.end();
})

app.get('/users' , (req , res) => {
    res.send("Users List") ;
    res.end();
})

app.post('/users' , (req , res) => {
    res.send("user created")
})

app.listen(5000) ;
