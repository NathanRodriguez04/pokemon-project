//* API GET request to retrieve pokemon based on random number *
function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET"
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            addPokemon(data);
        })
        .catch(err => {
            console.log("Uh oh, error: ", err);
        })
}