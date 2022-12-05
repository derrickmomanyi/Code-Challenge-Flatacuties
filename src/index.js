// Your code here
document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();
    
})

//fetch character data from server
function fetchCharacters() {
    fetch('http://localhost:3000/characters')
           .then((res) => res.json())
           .then((data) => renderAllCharacters(data))

}

// access each character details and display on a new span in the DOM
function renderAllCharacters(character){
   
    let charBar = document.getElementById('character-bar')
    character.forEach(character => {
    const span = document.createElement('span')  
    span.innerHTML = character.name
    charBar.appendChild(span)
    charBar.style.cursor = 'pointer'
    span.addEventListener('click', () => {
        selectedAnimal = character
        displayAnimal(character)
        charBar.style.cursor = 'default'
        form.reset()
        
    })
    })
}

function displayAnimal(character) {
    const characterName=  document.getElementById("name")
    characterName.innerHTML = character.name
    const characterImage = document.getElementById("image")
    characterImage.src = character.image
    const characterVotes = document.getElementById("vote-count")
    characterVotes.innerHTML = character.votes
    form.reset()

}


const form = document.getElementById("votes-form")
form.addEventListener('submit', (e) => {
    e.preventDefault()

    selectedAnimal.votes += parseInt(e.target.votes.value)
    
    displayAnimal(selectedAnimal)
})

const submit = document.getElementById("submit")
submit.style.cursor = "pointer"


const resetVotes = document.getElementById("reset-btn")
resetVotes.style.cursor = "default"
resetVotes.addEventListener('click', () => {
    selectedAnimal.votes = 0;
    displayAnimal(selectedAnimal)
})