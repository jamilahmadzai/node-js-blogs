const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");

//express app
const app = express();

//connect to mongodb
const dbURI =
  "mongodb+srv://jamil:Jamil@mongodb@cluster0.tnrn4.mongodb.net/node-first-tutorial?retryWrites=true&w=majority";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((error) => console.log(error));

//register view engine
app.set("view engine", "ejs");

//middleware and static files
app.use(express.static("public"));
//data from html file is recieved
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
