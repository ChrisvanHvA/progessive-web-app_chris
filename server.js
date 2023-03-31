const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
bodyParser = require("body-parser");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs", "html");

app.set('views', 'views');


app.use(express.static('public'))

// Get our route file
var homeRouter = require('./routes/home');
// Tell express to use our posts.js file for /posts routes
app.use('/', homeRouter);


app.listen(port, () => {
  console.log(`server online at http://localhost:${port}`);
});