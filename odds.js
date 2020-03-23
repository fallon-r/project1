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

// master function for out of season sports (returns N/a when sport is not in season)
function outOfSeason() {
    $("#first-league").addClass('text-center');
    $("#first-league").addClass("col-12")
    $(".main-group-set-one-team-odd-1").text("N/A");
    $(".main-group-set-one-team-odd-2").text("N/A");
    $(".main-group-set-two-team-odd-1").text("N/A");
    $(".main-group-set-two-team-odd-2").text("N/A");
    $(".main-group-set-three-team-odd-1").text("N/A");
    $(".main-group-set-three-team-odd-2").text("N/A");
    $(".main-group-set-four-team-odd-1").text("N/A");
    $(".main-group-set-four-team-odd-2").text("N/A");
    $(".main-group-set-five-team-odd-1").text("N/A");
    $(".main-group-set-five-team-odd-2").text("N/A");
    $(".main-group-set-six-team-odd-1").text("N/A");
    $(".main-group-set-six-team-odd-2").text("N/A");
};


// returns betting odds for baseball
function mlb() {
    // check sport status 
    if (sportActivity.data[3].active === true) {
        console.log("baseball is back")
    } else {
        //if sport is not active, returns n/a
        outOfSeason();
    }



};

// returns betting odds for nba
function nba() {
    if (sportActivity.data[5].active === true) {
        console.log("basketball's in season");
    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

// returns betting odds for hockey 
function nhl() {
    if (sportActivity.data[16].active === true) {
        console.log("basketball's in season");
    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

function ufc() {
    if (sportActivity.data[17].active === true) {
        console.log("ufc's in season");
    } else {
        //if sport is not active, returns n/a
        outOfSeason();

    }
};

$("#baseball").click(function(event) {
    event.preventDefault();
    mlb();

    //adds baseball image to jumbotron
    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images-na.ssl-images-amazon.com/images/I/61OZXrOI0rL._AC_SX355_.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#basketball").click(function(event) {
    event.preventDefault();
    nba();
    //adds basketball image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://ak9.picdn.net/shutterstock/videos/23220619/thumb/1.jpg'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#football").click(function(event) {
    event.preventDefault();

    //adds football (soccer to everyone but Simon :p) image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://images.cdn.fourfourtwo.com/sites/fourfourtwo.com/files/styles/image_landscape/public/170816_minnesota_1.jpg?itok=aXTO0hLH'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");

    })
});

$("#hockey").click(function(event) {
    event.preventDefault();
    nhl();

    //adds hockey image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://lh3.googleusercontent.com/proxy/zyZCFtk1gEx0uN8ARLm7oovgKW_YyM2JSFCvxlXJjlS7ls2onmViffEYSnH61czRStcEb6WUW5ldA_Iu_MbAdxP6nPSkEtOtdqX-uHaywM1MJWpT420HZ4nAGArECQ'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});

$("#ufc").click(function(event) {
    event.preventDefault();
    ufc();
    //adds UFC image to jumbotron

    $(".jumbotron").fadeIn("slow", function() {
        $(this).css("background-image", "url('https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2019-08/generic%20octagon%20hero.jpg?dguoinDzwlqytcB8FuAKPeX0xkPsTvh0&itok=o_g2w3o_'");
        $(this).css("background-size", "cover");
        $(this).css("background-repeat", "no-repeat");
        $(this).css("background-position", "center center");
    })
});