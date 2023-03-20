// fetch('https://api.github.com/users/ChrisvanHvA')
// 		.then(response => response.json()) //Converting the response to a JSON object
// 		.then( data => document.body.append())
// 		.catch( error => console.error(error));

var username = document.getElementById('username');
var bio = document.getElementById('bio');
var followers = document.getElementById('followers');
var following = document.getElementById('following');
var pfpic = document.getElementById('pfpic');
var date = document.getElementById('date');
var email = document.getElementById('email');
var work = document.getElementById('work');
var github = document.getElementById('github');
var repo = document.getElementById("repo");

function fetchInfo() {

  fetch('https://api.github.com/users/ChrisvanHvA')
    .then((response) => response.json())
    .then(function (data) {

      console.log(data);

      date.textContent = "On Github since " + data.created_at;
      email.textContent = "Email: " + data.email;

      if (email.textContent == "Email: null") {
        email.textContent = "check github for contact info";
      } else {
        email.textContent = "Email: " + data.email;
      }

      work.textContent = "Employment: " + data.company;
      github.textContent = "Github: " + data.login;
      github.setAttribute('href', data.html_url);



      pfpic.src = data.avatar_url;
      username.textContent = data.name;
      bio.textContent = data.bio;
      followers.textContent = "Followers:" + data.followers;
      following.textContent = "Following:" + data.following;




      function fetchrepo() {

        fetch('https://api.github.com/users/' + data.login + '/repos')
          .then((response) => response.json())
          .then(function (pur) {

            console.log(pur)
            repo.innerHTML = "<ul> <li><a href=\"" + pur[1].html_url + "\"><p>" +
              pur[1].name + "<br>" + pur[1].description +
              "</p></a></li> <li><a href=\"" + pur[3].html_url + "\"><p>" +
              pur[3].name + "<br>" + pur[3].description +
              "</p></a></li> <li><a href=\"" + pur[4].html_url + "\"><p>" +
              pur[4].name + "<br>" + pur[4].description +
              "</p></a></li> <li><a href=\"" + pur[5].html_url + "\"><p>" +
              pur[5].name + "<br>" + pur[5].description +
              "</p></a></li> <li><a href=\"" + pur[7].html_url + "\"><p>" +
              pur[7].name + "<br>" + pur[7].description +
              "</p></a></li> <li><a href=\"" + pur[9].html_url + "\"><p>" +
              pur[9].name + "<br>" + pur[9].description +
              "</p></a></li> <li><a href=\"" + pur[10].html_url + "\"><p>" +
              pur[10].name + "<br>" + pur[10].description +
              "</p></a></li> </ul>"

          })
      }

      fetchrepo();

    }).catch(function (err) {
      // voor foutjes
      console.warn('oepsie woepsie, er is iets stukkie wukkie.', err);

    })
}



fetchInfo();