const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const { inRange, escapeRegExp } = require("lodash");

app.set("view engine", "ejs");

const homeStartingContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!" 

const aboutContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!"

const contactContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae asperiores impedit dolor ea, commodi reiciendis inventore id? Quos deleniti, non illum aperiam odit ipsa odio totam voluptates, delectus debitis voluptatibus!"


app.use(bodyParser.urlencoded({extended: true}));
//static files
app.use(express.static("public"));

 
let posts = [];

app.get("/", (req, res)=>{
    res.render("home", {
        homeStartingContent : homeStartingContent, 
        posts : posts
    });

});

app.get("/about", (req, res)=>{
    res.render("about", {
        aboutContent : aboutContent
    });
});

app.get("/contact", (req, res)=>{
    res.render("contact", {
        contactContent : contactContent
    });
});

app.get("/compose", (req, res)=>{
    res.render("compose")
});

app.post("/compose", (req, res)=>{
    const publish = req.body.composePost
    // console.log(publish)
    const blogPost = {
    title: req.body.composeTitle,
    content: req.body.composePost
    };
    // console.log(blogPost);
    const loggedPosts = posts.push(blogPost);
    console.log(loggedPosts);
    res.redirect("/");
 });
 
 app.get("/posts/:singlePost", (req, res)=>{
    const requestedTitle = _.lowerCase(req.params.singlePost);
    
    posts.forEach( post => {
       const storedTitle = _.lowerCase(post.title);

       if(storedTitle === requestedTitle){
       res.render("post", {
           title : post.title, 
           content : post.content
       });
     };
  });
});

app.listen(3000, ()=>{
console.log("Server is listening on Port 3000")
});