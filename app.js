var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set("view engine", "ejs");

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
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("EventsByRonnie server has started!");
})