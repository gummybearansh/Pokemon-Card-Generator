let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let draggedElement = null;

function fetchPokemon(){
    const pokemonName= document.querySelector("#pokemon-name").value;
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            createCard(data);
        })
        .catch (err => {
            alert("Please Enter a valid Pokemon Name")
        })
}

function createCard(data){
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardDiv.style.position = "absolute"; 
    
    // Add the mousedown event listener
    cardDiv.addEventListener('mousedown', (e) => {
        isDragging = true;
        draggedElement = cardDiv;
        offsetX = e.clientX - cardDiv.getBoundingClientRect().left;
        offsetY = e.clientY - cardDiv.getBoundingClientRect().top;
        cardDiv.style.cursor = 'grabbing';
    });

    const cardGif = document.createElement("div");
    cardGif.className = "card-gif";
    const gif = document.createElement("img");
    gif.id = "gif";
    gif.src = data.sprites.other.showdown.front_default;
    // so that cannot grab the gif
    cardGif.appendChild(gif);
    
    const cardText = document.createElement("div");
    cardText.className = "card-text";
    
    const name = document.createElement("h3");
    name.innerHTML = "Name: " + data.name;
    const type = document.createElement("h3");
    type.innerHTML = "Type: " + data.types[0].type.name;
    const stats = document.createElement("h3");
    stats.innerHTML = "Base Stat: " + data.stats[0].base_stat;
    const moveCount = document.createElement("h3"); 
    moveCount.innerHTML = "Move Count: " + data.moves.length;

    cardText.appendChild(name);
    cardText.appendChild(type);
    cardText.appendChild(stats);
    cardText.appendChild(moveCount);

    cardDiv.appendChild(cardGif);
    cardDiv.appendChild(cardText);

    const draggableText = document.createElement("span");
    draggableText.textContent = "I'm draggable";
    draggableText.className = "draggable-text";

    // Append the text to the cardDiv
    cardDiv.appendChild(draggableText);

    document.querySelector("#container").appendChild(cardDiv);

    cardDiv.style.cursor = 'grab';
    cardDiv.classList.add('card-animation');

    // Remove the animation class once the animation is done
    cardDiv.addEventListener('animationend', () => {
        cardDiv.classList.remove('card-animation');
    }, { once: true });
}

document.addEventListener('mousemove', (e) => {
    if (isDragging && draggedElement) {
        const newLeft = e.clientX - offsetX;
        const newTop = e.clientY - offsetY;
        draggedElement.style.left = `${newLeft}px`;
        draggedElement.style.top = `${newTop}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    if (draggedElement) {
        draggedElement.style.cursor = 'grab';
        draggedElement = null; // Clear the reference to the dragged element
    }
});
