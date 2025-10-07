
// Goal: Enable user to enter a futurama character and return the character's info.

// get text info by user
// listen for click
// grab information (beer name)
// setup the url from the beer api
// perform the fetch request
// extract character description from the response
// display it in the DOM

const beer = document.getElementById('beer')
let beerdata;

const requestOptions = {
  method: "GET",
  redirect: "follow"
};

fetch("https://api.sampleapis.com/beers/ale", requestOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    beerdata = data
  })
  .catch((error) => console.error(error));

beer.addEventListener(("change"), () => {
  // take the beer data use the filter function to get all matching results. The match function takes the name of the beer from the data (user's selected beer choice)
    const beers = beerdata.filter(w => w.name.includes(beer.value))
    // solve the image issue by getting a random beer image 
    const randomBeer = beers[Math.floor (Math.random ()*beers.length)]
  console.log(randomBeer);
  const dataDiv = document.querySelector('#data')
  dataDiv.innerText = randomBeer.price
  const img = document.querySelector("img");
  img.src = randomBeer.image
})

// make a note that not all of the images exist in the API

// completed with the help of Mentor, Michael Kazin.
