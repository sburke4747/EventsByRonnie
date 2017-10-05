var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

//Internal Routing

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/gallery", function(req, res){
    res.render("gallery");
});

app.get("/pricing", function(req, res){
    res.render("pricing");
});

app.get("/services", function(req, res){
    res.render("services");
});

//External Routing

app.get("/MySite", function(req, res){
    res.redirect("https://www.google.com/");
});

app.get("/Instagram", function(req, res){
    res.redirect("https://www.instagram.com/");
});

app.get("/Facebook", function(req, res){
    res.redirect("https://www.facebook.com/");
});

app.get("/Twitter", function(req, res){
    res.redirect("https://www.twitter.com/");
});

app.get("/Pintrest", function(req, res){
    res.redirect("https://www.pintrest.com/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("EventsByRonnie server has started!");
})