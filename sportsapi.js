var today = new Date();
var year = today.getFullYear();
var month = (today.getMonth() + 1);
var day = today.getDate();

function football() {

    var queryURL = "https://api.football-data.org/v2/matches"

    $.ajax({
        url: queryURL,
        method: "GET",
        dataType: "json",
        headers: { "X-Auth-Token": "ed4192ef5c68440da68e438c9027d090" }
    }).then(function (response) {
        console.log(response);

        var awayteam1 = response.matches[0].awayTeam.name;
        var hometeam1 = response.matches[0].homeTeam.name;
        var status1 = response.matches[0].status;
        var matchup1 = (hometeam1 + " vs " + awayteam1 + " (" + status1 + ")");

        var awayteam2 = response.matches[1].awayTeam.name;
        var hometeam2 = response.matches[1].homeTeam.name;
        var status2 = response.matches[1].status;
        var matchup2 = (hometeam2 + " vs " + awayteam2 + " (" + status2 + ")");

        var awayteam3 = response.matches[2].awayTeam.name;
        var hometeam3 = response.matches[2].homeTeam.name;
        var status3 = response.matches[2].status;
        var matchup3 = (hometeam3 + " vs " + awayteam3 + " (" + status3 + ")");

        var awayteam4 = response.matches[3].awayTeam.name;
        var hometeam4 = response.matches[3].homeTeam.name;
        var status4 = response.matches[3].status;
        var matchup4 = (hometeam4 + " vs " + awayteam4 + " (" + status4 + ")");

        var awayteam5 = response.matches[4].awayTeam.name;
        var hometeam5 = response.matches[4].homeTeam.name;
        var status5 = response.matches[4].status;
        var matchup5 = (hometeam5 + " vs " + awayteam5 + " (" + status5 + ")");

        var awayteam6 = response.matches[5].awayTeam.name;
        var hometeam6 = response.matches[5].homeTeam.name;
        var status6 = response.matches[5].status;
        var matchup6 = (hometeam6 + " vs " + awayteam6 + " (" + status6 + ")");


        $(".matchOne").append(matchup1);
        $(".matchTwo").append(matchup2);
        $(".matchThree").append(matchup3);
        $(".matchFour").append(matchup4);
        $(".matchFive").append(matchup5);
        $(".matchSix").append(matchup6);

    });
}

football();

function nba() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nba/trial/v7/en/games/' + year + '/' + month + '/' + day + '/schedule.json?api_key=a8bxc8umhxyda8m8tyx4gtk5',
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);

        var eventMatchup1 = response.games[0].home.name + " vs " + response.games[0].away.name + " (" + (response.games[0].status) + ")";

        var eventMatchup2 = response.games[1].home.name + " vs " + response.games[1].away.name + " (" + (response.games[1].status) + ")";

        var eventMatchup3 = response.games[2].home.name + " vs " + response.games[2].away.name + " (" + (response.games[2].status) + ")";

        var eventMatchup4 = response.games[3].home.name + " vs " + response.games[3].away.name + " (" + (response.games[3].status) + ")";

        var eventMatchup5 = response.games[4].home.name + " vs " + response.games[4].away.name + " (" + (response.games[4].status) + ")";

        var eventMatchup6 = response.games[5].home.name + " vs " + response.games[5].away.name + " (" + (response.games[5].status) + ")";

        $(".matchOne").append(eventMatchup1);
        $(".matchTwo").append(eventMatchup2);
        $(".matchThree").append(eventMatchup3);
        $(".matchFour").append(eventMatchup4);
        $(".matchFive").append(eventMatchup5);
        $(".matchSix").append(eventMatchup6);
    });
}

function mlb() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.sportradar.us/mlb/trial/v7/en/games/' + year + '/' + month + '/' + day + '/schedule.json?api_key=3waqtxkkfutrcenmdxxbeprz',
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);

        var eventMatchup1 = response.games[0].home.name + " vs " + response.games[0].away.name + " (" + (response.games[0].status) + ")";

        var eventMatchup2 = response.games[1].home.name + " vs " + response.games[1].away.name + " (" + (response.games[1].status) + ")";

        var eventMatchup3 = response.games[2].home.name + " vs " + response.games[2].away.name + " (" + (response.games[2].status) + ")";

        var eventMatchup4 = response.games[3].home.name + " vs " + response.games[3].away.name + " (" + (response.games[3].status) + ")";

        var eventMatchup5 = response.games[4].home.name + " vs " + response.games[4].away.name + " (" + (response.games[4].status) + ")";

        var eventMatchup6 = response.games[5].home.name + " vs " + response.games[5].away.name + " (" + (response.games[5].status) + ")";

        $(".matchOne").append(eventMatchup1);
        $(".matchTwo").append(eventMatchup2);
        $(".matchThree").append(eventMatchup3);
        $(".matchFour").append(eventMatchup4);
        $(".matchFive").append(eventMatchup5);
        $(".matchSix").append(eventMatchup6);

    });
}

function nhl() {
    $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://api.sportradar.us/nhl/trial/v7/en/games/' + year + '/' + month + '/' + day + '/schedule.json?api_key=cgcrybxx2k8cdpa4u5ckga6x',
        method: "GET",
        dataType: "json"
    }).then(function (response) {
        console.log(response);

        var eventMatchup1 = response.games[0].home.name + " vs " + response.games[0].away.name + " (" + (response.games[0].status) + ")";

        var eventMatchup2 = response.games[1].home.name + " vs " + response.games[1].away.name + " (" + (response.games[1].status) + ")";

        var eventMatchup3 = response.games[2].home.name + " vs " + response.games[2].away.name + " (" + (response.games[2].status) + ")";

        var eventMatchup4 = response.games[3].home.name + " vs " + response.games[3].away.name + " (" + (response.games[3].status) + ")";

        var eventMatchup5 = response.games[4].home.name + " vs " + response.games[4].away.name + " (" + (response.games[4].status) + ")";

        var eventMatchup6 = response.games[5].home.name + " vs " + response.games[5].away.name + " (" + (response.games[5].status) + ")";

        $(".matchOne").append(eventMatchup1);
        $(".matchTwo").append(eventMatchup2);
        $(".matchThree").append(eventMatchup3);
        $(".matchFour").append(eventMatchup4);
        $(".matchFive").append(eventMatchup5);
        $(".matchSix").append(eventMatchup6);

    });
}

$("#football").on("click", function (event) {
    event.preventDefault();
    $(".match").empty();
    football();
});

$("#basketball").on("click", function (event) {
    event.preventDefault();
    $(".match").empty();
    nba();
});

$("#baseball").on("click", function (event) {
    event.preventDefault();
    $(".match").empty();
    mlb();
});

$("#hockey").on("click", function (event) {
    event.preventDefault();
    $(".match").empty();
    nhl();
});
