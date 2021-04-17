//GRABBING ENVIRONMENT VARIABLES
require("dotenv").config();
//IMPORTING EXPRESS
const express = require("express");
const app = express();

// GET PORT FROM ENV OR DEFAULT PORT
const PORT = process.env.PORT || "2021";
const SECRET = process.env.SECRET || "secret"

//IMPORTING MIDDLEWARE
const methodOverride = require("method-override");
const morgan = require("morgan");
const cors = require("cors");
app.use(cors()); // Prevent Cors Errors if building an API
app.use(methodOverride("_method")); // Swap method of requests with _method query
app.use(express.static("public")); // serve the public folder as static
app.use(morgan("tiny")); // Request Logging
app.use(express.json()); // Parse json bodies
app.use(express.urlencoded({ extended: false })); //parse bodies from form submissions

//CONFIGURE SERVER SETTING WITH APP.SET()
app.set(`view engine`, `ejs`);

const HomeRouter = require("./routes/home.js");
app.use("/", HomeRouter)

app.get("/", (req, res) => {
  res.redirect("/meals")
});


app.listen(PORT, () =>
  console.log("🚀 Server Launch 🚀", `Listening on Port ${PORT}`)
);