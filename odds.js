var key = "1194b7ea53a49fad946f0bc020a4d57c";

// defaults to US, but uses browser language to get bookmakers
var region = navigator.language.slice(3, 5).toLowerCase();
//Blank array for sport status location
var sportActivity;

//special URL that returns whether sport is in or out of season.
var sportStatus = "https://api.the-odds-api.com/v3/sports/?apiKey=" + key + "&all=1"

function getStatus() {
    $.ajax({
        url: sportStatus,
        method: "GET"
    }).then(function(response) {
        sportActivity = response;
    });

};


// The array becomes filled with the status of all sports. they are in alphabetical order so indices are static.
getStatus();


function mlb() {};

$("#baseball").click(function(event) {
    event.preventDefault();
    mlb();
});

$("#basketball").click(function(event) {
    event.preventDefault();
    mlb();
});

$("#football").click(function(event) {
    event.preventDefault();
    mlb();
});

$("#hockey").click(function(event) {
    event.preventDefault();
    mlb();
});

$("#ufc").click(function(event) {
    event.preventDefault();
    mlb();
});