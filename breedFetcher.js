const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, body) => {
    if (error) {
      callback(error);
    } else {
      const stringified = JSON.stringify(body);
      const data = JSON.parse(stringified)
      // var stringified = JSON.stringify(data);
      // const parsedObj  = JSON.parse(stringified);
      //console.log(parsedObj );
      console.log(data);
      // console.log(typeof data);
    }
  });
};

module.exports = { fetchBreedDescription };