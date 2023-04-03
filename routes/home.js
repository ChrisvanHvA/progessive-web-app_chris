const express = require('express');
const request = require('request');
// But this time, we only call the router part of express
const router = express.Router();
const fetch = require('node-fetch');

// Code largely from the simple example, only app. changed into router and '/posts/' stripped from the url

router.get("/", async function (req, res) {

	const result = await apiCall();
	const repos = await repoCall();


	repos.forEach(repo => {
		console.log(repo.name);
	});


	res.render("index", {
		'userData': result,
		'repos': repos
	});
	
	
});

async function apiCall() {
	try {

		const response = await fetch('https://api.github.com/users/ChrisvanHvA');

		if (response.ok) {
			const result = await response.json();	
			return result;
		}
		
		return [];
	} catch (error) {
		return [];
	}
}
async function repoCall() {
	try {

		const repoResp = await fetch('https://api.github.com/users/ChrisvanHvA/repos');

		if (repoResp.ok) {
			const repos = await repoResp.json();	
			return repos;
		}
		
		return [];
	} catch (error) {
		return [];
	}
}
// Make sure to export the router so it becomes available on imports
module.exports = router;
