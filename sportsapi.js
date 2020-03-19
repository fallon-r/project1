var queryURL = "https://api.football-data.org/v2/matches?dateFrom=2020-03-18&dateTo=2020-03-19"

$.ajax({
    url:queryURL,
    method: "GET",
    dataType: "json",
    headers:{"X-Auth-Token": "ed4192ef5c68440da68e438c9027d090"}
    }).then(function(response){
    console.log(response);
        
        var i = Math.floor(Math.random()*response.matches.length);
    
        console.log(response.matches[i].status);
        console.log(response.matches[i].competition.area.name);
        console.log(response.matches[i].competition.name)
        console.log(response.matches[i].homeTeam.name);
        console.log(response.matches[i].awayTeam.name);
        console.log(response.matches[i].score.winner);
        
    });