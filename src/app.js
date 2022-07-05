const express = require("express");
const hbs = require("hbs");
const path = require("path");

const publicPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../template/views");
const includePath = path.join(__dirname, "../template/include");

const URL_PORT = process.env.PORT || 8080;

const app = express();

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(includePath);
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.render("index", {
    copyrightsYear: "2020-2022",
    createrName: "MURALITHARAN"
  });
});
app.get("/about", (req, res) => {
  res.render("about", {});
});
app.get("/doc", (req, res) => {
  res.render("doc", {});
});

app.listen(URL_PORT, (err, suc) => {
  console.log("connection successfully");
});
