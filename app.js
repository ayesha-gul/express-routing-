 let express = require("express");
 let app = express();

   app.get("/", (req,res) => {
       res.send("Welcome to the home page");
   });
   app.get("/about", (req,res) => {
    res.send("Welcome to the about page");
});
app.get("/contact", (req,res) => {
    res.send("Welcome to the contact page");
});
app.get("/temp", (req,res) => {
    res.send("Welcome to the temperature check page");
});
app.listen(3000, "127.0.0.1", () => {
    console.log("listening to the port no 3000!");
});