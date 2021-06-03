const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, body) => {
    if (error) {
      callback(error);
    } else {
      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
    }
  });
};

module.exports = { fetchBreedDescription };