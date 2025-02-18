//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////

const url = "https://handlers.education.launchcode.org/static/planets.json";
let planets = [];
let index = 0;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    planets = data;
    info();
  })
  .catch((error) => console.error("ErRoR", error));

function info() {
  if (planets.length === 0) return;

  const planet = planets[index];
  const destinationDiv = document.querySelector("#destination");

  while (destinationDiv.children.length > 1) {
    destinationDiv.removeChild(destinationDiv.lastChild);
  }

  const planetName = document.createElement("p");
  planetName.textContent = `Planet: ${planet.name}`;
  destinationDiv.appendChild(planetName);

  const distance = document.createElement("p");
  distance.textContent = `Distance: ${planet.distance}`;
  destinationDiv.appendChild(distance);
}

document.getElementById("destination").addEventListener("click", function () {
  index = (index + 1) % planets.length;
  info();
});
