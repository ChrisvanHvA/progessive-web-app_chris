const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
bodyParser = require("body-parser");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs", "html");

app.set('views', 'views');


app.use(express.static('public'))



// haalt de route file op die de api ophaald
var homeRouter = require('./routes/home');
app.use('/', homeRouter);


app.listen(port, () => {
  console.log(`server online at http://localhost:${port}`);
});