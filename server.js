const express = require("express");
const app = express();
const router = express.Router();
const port = process.env.PORT || 4000;
bodyParser = require("body-parser");
const fetch = require('node-fetch');
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs", "html");

app.set('views', 'views');


app.use(express.static('public'))

// Get our route file
var postsRouter = require('./public/script');
// Tell express to use our posts.js file for /posts routes
app.use('/posts', postsRouter);

app.get("/", function (req, res) {
    fetch('https://api.github.com/users/ChrisvanHvA')
    .then(res => res.text())
    .then(body => console.log(body))
    .catch((error) => console.log(error));

 
    
  
    

  res.render("index", {});
  
});




app.use(express.static("public"));


app.listen(port, () => {
  console.log(`server online at http://localhost:${port}}`);
});