//At the top of the liri.js file, write the code you need to grab 
//the data from keys.js. Then store the keys in a variable.

var keys = require("./keys.js");

//Variables for packages
var twitter = require("twitter");
var spotify = require("spotify");
var request = require("request");
var fs = require("fs");

//TWITTER===================================
//node liri.js my-tweets
//This will show your last 20 tweets and when 
//they were created at in your terminal/bash window.

var myTweets = function() {

  // npm syntax
	var client = new twitter(keys.twitterKeys);

	var params = {screen_name: "RachelMarieGee"};
  client.get("statuses/user_timeline", params, function(error, tweets, response) {
    if (!error) {

      //for loop 
      for (var i = 0; i < tweets.length; i++) {
        //console.log of date and time of tweet
        console.log(tweets[i].created_at);
        //creates space
        console.log("");
        //shows tweet text
        console.log(tweets[i].text);
      }
    }
  }); // End npm twitter syntax
};

var pick = function(caseData, functionData) {
  switch (caseData) {
    case "my-tweets":
      myTweets();
      break;
      }
    };

  var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo);
  };

  runThis(process.argv[2], process.argv[3]);

// END TWITTER ======================================

//START SPOTIFY=====================================


var  myartist = function(artist) {
  return artist.name;
};

var mySpotify = function(songTitle) {

 if (songTitle === undefined) {
    songTitle = "IS THIS WORKINGS !!!!";
  }

spotify.search({ 
  type: 'track', 
  query: songTitle
  }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 
    var songs = data.tracks.items;

    for (var i = 0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(myartist));
      console.log("song name: " + songs[i].name);
      console.log("preview song: " + songs[i].preview_url);
      console.log("album: " + songs[i].album.name);
      console.log("-----------------------------------");
    }
  });
};

var pickSpotify = function(caseData, functionData) {
  switch (caseData) {
    case "spotify-this-song":
      mySpotify(functionData);
      break;
      }
    };

  var runThis = function(argOne, argTwo) {
    pickSpotify(argOne, argTwo);
  };

  runThis(process.argv[2], process.argv[3]);


// END SPOTIFY============================================











