/*
    * Pull data from the NASA Image API using AJAX
    * Handle 200, 400, and 500 errors using Promises (objects that can be returned synchronously from an asynchronous function)
    * Use destructuring to parse the JSON response (unpacks from arrays to distinct variables)
    * Save previous searches using the DOM localStorage API
    * Use a mouseover event to make captions appear
    * Use a default value for when a user doesn't input anything in the search box
    * Use template strings to display all the text on the page
    * Insert a Loading indicator
    * Insert a Sidebar/List of previously searched terms
*/

/*
    Endpoint: https://images-api.nasa.gov
    GET /search?q={q}	    Performing a search
    GET /asset/{nasa_id}	Retrieving a media asset’s manifest
    GET /metadata/{nasa_id}	Retrieving a media asset’s metadata location
    GET /captions/{nasa_id}	Retrieving a video asset’s captions location
*/

// Example of call https://api.nasa.gov/planetary/apod?api_key=nuObM1zZYvw5ZqrZKV7LQBGkaiuFX3VRqA1B4MUm

// Address https://api.nasa.gov/api.html#Images

var response = null;
var api = 'https://api.nasa.gov/planetary/apod?api_key=nuObM1zZYvw5ZqrZKV7LQBGkaiuFX3VRqA1B4MUm';

document.getElementsByTagName('button')[0].addEventListener('click', function(r) {
    search(document.getElementsByTagName('input')[0].value);
});

function search(input) {
    fetch('https://images-api.nasa.go/search?q=' + input)
    .then(function(r) {
        return r.json();
    })
    .then(function(j) {
        response = j;
        console.log("The search is " + input);
        assign();
    })
}

fetch(api)
.then (function(r) {
    console.log(r.status);
    return r.json();
})
.then (function(j) {
    response = j;
    console.log(j);
    assign();
})

function assign() {
    document.getElementById('copyright').innerText = "Image Credits to: " + response.copyright;
    document.getElementById('title').innerText = response.title;
    document.getElementById('explanation').innerText = response.explanation;
    document.getElementById('image').src = response.url;
}

function copyrightUpdate(info) {
    fetch(api)
    .then(function(r) {
        return r.json();
    })
    .then(function(j) {
        response = j;

        if(typeof(copyright) === null)
        {
            document.copyright === "Image Credits to: NASA";
        }

        document.getElementById('copyright').innerText = "Image Credits to: " + response.copyright;
    })
}
