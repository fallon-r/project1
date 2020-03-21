var queryURL = "https://api.football-data.org/v2/matches?dateFrom=2020-03-18&dateTo=2020-03-19"

$.ajax({
    url:queryURL,
    method: "GET",
    dataType: "json",
    headers:{"X-Auth-Token": "ed4192ef5c68440da68e438c9027d090"}
    }).then(function(response){
    console.log(response);
        
    // for(let i = 0; i < 6; i++){  
        // console.log(response.matches[i].status);
        
        // console.log(response.matches[i].competition.area.name);
        // console.log(response.matches[i].competition.name)
        // console.log(response.matches[i].homeTeam.name);
        // console.log(response.matches[i].awayTeam.name);
        // console.log(response.matches[i].score.winner);


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


        }
    
        );
        
   