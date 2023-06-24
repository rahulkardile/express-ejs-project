const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let Items = ["Buy Food", "Cook Food", "Eat Food"];

app.get("/", (req, res)=>{
    const day = new Date().toLocaleDateString("en-Us", {weekday:"long", month:"long", day:"2-digit"});
    res.render("list", {listTitle: day, listItems: Items});
})

app.post("/", (req, res) => {
    let item = req.body.newInput;
    Items.push(item);
    res.redirect("/");
})

app.listen("3000", ()=>{
    console.log('server is running . . .');
})