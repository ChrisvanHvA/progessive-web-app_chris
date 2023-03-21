// We also need express and request here
const express = require('express');
const request = require('request');
// But this time, we only call the router part of express
const router = express.Router();

// Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url

// Create a route for our overview page
router.get('/', function(req, res) {
	request('localhost:4000/posts', {json: true}, function (err, requestRes, body){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'posts' view and our body data
			res.render('posts', {
				title: 'Posts', // We use this for the page title, see views/partials/head.ejs
				postData: body
			});
		}
	});
});

// Create a route for our detail page
router.get('/:id', function(req, res) {
	request(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, {json: true}, function (err, requestRes, body){
		if (err) {
			// We got an error
			res.send(err);
		} else {
			// Render the page using the 'post' view and our body data
			res.render('post', {
				title: `Post ${req.params.id}`, 
				postData: body
			});
		}
	});
});

// Make sure to export the router so it becomes available on imports
module.exports = router;














// // fetch('https://api.github.com/users/ChrisvanHvA')
// // 		.then(response => response.json()) //Converting the response to a JSON object
// // 		.then( data => document.body.append())
// // 		.catch( error => console.error(error));

// var bio = document.getElementById('bio');
// var followers = document.getElementById('followers');
// var following = document.getElementById('following');
// var pfpic = document.getElementById('pfpic');
// var date = document.getElementById('date');
// var email = document.getElementById('email');
// var work = document.getElementById('work');
// var github = document.getElementById('github');
// var repo = document.getElementById("repo");

// function fetchInfo() {

//   fetch('ttps://api.github.com/users/ChrisvanHvh')
//     .then((response) => response.json())
//     .then(function (data) {

//       console.log(data);

//       date.textContent = "On Github since " + data.created_at;
//       email.textContent = "Email: " + data.email;

//       if (email.textContent == "Email: null") {
//         email.textContent = "check github for contact info";
//       } else {
//         email.textContent = "Email: " + data.email;
//       }

//       work.textContent = "Employment: " + data.company;
//       github.textContent = "Github: " + data.login;
//       github.setAttribute('href', data.html_url);



//       pfpic.src = data.avatar_url;
//       username.textContent = data.name;
//       bio.textContent = data.bio;
//       followers.textContent = "Followers:" + data.followers;
//       following.textContent = "Following:" + data.following;




//       function fetchrepo() {

//         fetch('https://api.github.com/users/' + data.login + '/repos')
//           .then((response) => response.json())
//           .then(function (pur) {

//             console.log(pur)
//             repo.innerHTML = "<ul> <li><a href=\"" + pur[1].html_url + "\"><p>" +
//               pur[1].name + "<br>" + pur[1].description +
//               "</p></a></li> <li><a href=\"" + pur[3].html_url + "\"><p>" +
//               pur[3].name + "<br>" + pur[3].description +
//               "</p></a></li> <li><a href=\"" + pur[4].html_url + "\"><p>" +
//               pur[4].name + "<br>" + pur[4].description +
//               "</p></a></li> <li><a href=\"" + pur[5].html_url + "\"><p>" +
//               pur[5].name + "<br>" + pur[5].description +
//               "</p></a></li> <li><a href=\"" + pur[7].html_url + "\"><p>" +
//               pur[7].name + "<br>" + pur[7].description +
//               "</p></a></li> <li><a href=\"" + pur[9].html_url + "\"><p>" +
//               pur[9].name + "<br>" + pur[9].description +
//               "</p></a></li> <li><a href=\"" + pur[10].html_url + "\"><p>" +
//               pur[10].name + "<br>" + pur[10].description +
//               "</p></a></li> </ul>"

//           })
//       }

//       fetchrepo();

//     }).catch(function (err) {
//       // voor foutjes
//       console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);

//     })
// }



// fetchInfo();