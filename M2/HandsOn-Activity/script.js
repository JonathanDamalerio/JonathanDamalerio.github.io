const nameElement = document.getElementById('name');
const speciesElement = document.getElementById('species');
const statusElement = document.getElementById('status');
const genderElement = document.getElementById('gender');
const imageElement = document.getElementById('characterImage');
const lastKnownLocationElement = document.getElementById('lastKnownLocation');
const firstSeenInElement = document.getElementById('firstSeenIn');
const button = document.getElementById('newCharacterBtn');

function fetchCharacter() {
    nameElement.textContent = 'Loading character...';
    speciesElement.textContent = '';
    statusElement.textContent = '';
    genderElement.textContent = '';
    lastKnownLocationElement.textContent = '';
    firstSeenInElement.textContent = '';
    imageElement.src = '';

    fetch('https://rickandmortyapi.com/api/character/' + (Math.floor(Math.random() * 826) + 1))
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            nameElement.textContent = data.name;
            speciesElement.textContent = `Species: ${data.species}`;
            statusElement.textContent = `Status: ${data.status}`;
            genderElement.textContent = `Gender: ${data.gender}`;
            imageElement.src = data.image;

            lastKnownLocationElement.textContent = `Last Known Location: ${data.location.name}`;
            firstSeenInElement.textContent = `First Seen In: ${data.origin.name}`;
        })
        .catch(error => {
            console.error('Error fetching character:', error);
            nameElement.textContent = 'Failed to load character. Please try again.';
            speciesElement.textContent = '';
            statusElement.textContent = '';
            genderElement.textContent = '';
            lastKnownLocationElement.textContent = '';
            firstSeenInElement.textContent = '';
            imageElement.src = '';
        });
}

button.addEventListener('click', fetchCharacter);

fetchCharacter();