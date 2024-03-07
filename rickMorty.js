window.addEventListener('load', () => {
    const charactersContainer = document.getElementById('characters');

    fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(data => {
            const characters = data.results;
            characters.forEach(character => {
                const characterCard = createCharacterCard(character);
                charactersContainer.appendChild(characterCard);
            });
        })
        .catch(error => console.error('Error fetching characters:', error));

    function createCharacterCard(character) {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-3');

        const cardContent = `
            <div class="card">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Status: ${character.status}</p>
                    <p class="card-text">Species: ${character.species}</p>
                    <p class="card-text">Origin: ${character.origin.name}</p>
                </div>
            </div>
        `;

        card.innerHTML = cardContent;
        return card;
    }
});
