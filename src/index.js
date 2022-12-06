// Your code here
document.addEventListener('DOMContentLoaded', () => {
    fetchCharacters();
    
})
 
//fetch character data from server
function fetchCharacters() {
    fetch('http://localhost:3000/characters')
           .then((res) => res.json())
           .then((data) => renderAllCharacters(data))    //create a new function to render our data

}

// access each character details and display on a new span in the DOM
function renderAllCharacters(character){
   
    let charBar = document.getElementById('character-bar')  //get the div element with id of character-bar and assign a variable (charBar)
    character.forEach(character => {                        //iterate through each character using the fetched data
    const span = document.createElement('span')             //create a span tag 
    span.innerHTML = character.name                         //use the name of the character to display in the span tag
    charBar.appendChild(span)                                // append the span tag inside the div
    charBar.style.cursor = 'pointer'                         //set cursor style to 'pointer'
    span.addEventListener('click', () => {                   //add click event such that whem the animal name is clicked it displays the details
        selectedAnimal = character
        displayAnimal(character)
        form.reset()                                          //reset the form after each click
        
    })
    })
}

function displayAnimal(character) {
    const characterName=  document.getElementById("name")    //get paragraph element with id name and assign a variable (characterName)
    characterName.innerHTML = character.name                 //assign our variable the fetched data of the character name
    const characterImage = document.getElementById("image")   //get img element with id image and assign a variable (characterImage)  
    characterImage.src = character.image                      //assign our variable the fetched data of the character image
    const characterVotes = document.getElementById("vote-count")   //get h4 element with id voteCount and assign a variable (characterVotes)
    characterVotes.innerHTML = character.votes                     //assign our variable the fetched data of the character votes
    form.reset()                                                  //reset form after each click

}


const form = document.getElementById("votes-form")            //get form element with id votes-form and assign a variable (form)
form.addEventListener('submit', (e) => {                      //add submit event listener 
    e.preventDefault()                                       //prevents browser default refresh feature after each click

    selectedAnimal.votes += parseInt(e.target.votes.value)      //+=ensures votes are incremented from a previous value {votes = votes + input.value}
    
    displayAnimal(selectedAnimal)
})

const submit = document.getElementById("submit")              //get the submit button element with id "submit" and assign a variable (submit)
submit.style.cursor = "pointer"                               //get the cursor to change to hand when you hover around it


const resetVotes = document.getElementById("reset-btn")      //get the reset button element with id "reset-btn" and assign a variable (resetVotes)
resetVotes.style.cursor = "default"
resetVotes.addEventListener('click', () => {                 // add event listener such that when you click the reset button the count resets to 0
    selectedAnimal.votes = 0;
    displayAnimal(selectedAnimal)
})