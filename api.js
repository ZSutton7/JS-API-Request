// Get DOM elements for joke and button
const jokeElement = document.getElementById('joke');
const getJokeButton = document.getElementById('getJoke');

// Function to fetch new joke and update DOM
function fetchJoke() {
  // Make fetch request to Chuck Norris Jokes API
  fetch('https://api.chucknorris.io/jokes/random')
    // Parse response as JSON
    .then(response => response.json())
    // Use joke value to update the DOM
    .then(data => {
      jokeElement.textContent = data.value;
      jokeElement.style.display = 'block'; // Show the joke after it is fetched
    })
    // Handle errors
    .catch(error => {
      jokeElement.textContent = 'Oops, something went wrong!';
      console.error(error);
    });
}

// Add click event listener to button
getJokeButton.addEventListener('click', fetchJoke);

// Hide joke initially
jokeElement.style.display = 'none';