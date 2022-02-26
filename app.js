const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const ejs = require("ejs");


app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
//static files
app.use(express.static("public"));

//home
app.get("/", (req, res)=>{
    res.render("home")
});

//post



app.listen(3000, ()=>{
console.log("Server is listening on Port 3000")
});