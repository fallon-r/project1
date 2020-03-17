var queryURL = "https://api.football-data.org/v2/matches"

$.ajax({
    url:queryURL,
    method: "GET",
    dataType: "json",
    headers:{"X-Auth-Token": "ed4192ef5c68440da68e438c9027d090"}
    }).then(function(response){
    console.log(response);
    });