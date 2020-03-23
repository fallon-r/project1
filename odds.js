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
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images-na.ssl-images-amazon.com/images/I/61OZXrOI0rL._AC_SX355_.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#basketball").click(function(event) {
    event.preventDefault();
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://ak9.picdn.net/shutterstock/videos/23220619/thumb/1.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#football").click(function(event) {
    event.preventDefault();
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/styles/image_landscape/public/170816_minnesota_1.jpg?itok=aXTO0hLH'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#hockey").click(function(event) {
    event.preventDefault();
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://lh3.googleusercontent.com/proxy/zyZCFtk1gEx0uN8ARLm7oovgKW_YyM2JSFCvxlXJjlS7ls2onmViffEYSnH61czRStcEb6WUW5ldA_Iu_MbAdxP6nPSkEtOtdqX-uHaywM1MJWpT420HZ4nAGArECQ'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});

$("#ufc").click(function(event) {
    event.preventDefault();
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2019-08/generic%20octagon%20hero.jpg?dguoinDzwlqytcB8FuAKPeX0xkPsTvh0&itok=o_g2w3o_'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});