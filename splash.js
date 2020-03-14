var queryURL = "https://api.the-odds-api.com/v3/sports/?apiKey=1194b7ea53a49fad946f0bc020a4d57c"


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
    console.log(response)
});