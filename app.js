const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const ejs = require("ejs");

app.set("view engine", "ejs");

const homeStartingContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!" 

const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!"

const contentContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!"

app.use(bodyParser.urlencoded({extended: true}));
//static files
app.use(express.static("public"));

//home
app.get("/", (req, res)=>{
    res.render("home", {
        homeStartingContent : homeStartingContent
    });
});


app.listen(3000, ()=>{
console.log("Server is listening on Port 3000")
});