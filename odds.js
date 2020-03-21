var key = "1194b7ea53a49fad946f0bc020a4d57c";
var region = navigator.language.slice(3, 5).toLowerCase();
var odds = "h2h";


var queryURL = "https://api.the-odds-api.com/v3/sports/?apiKey=" + key + "&all=1";
// + "&sport=upcoming" + "&mkt=" + odds;


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response);
    console.log(queryURL)
});