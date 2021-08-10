//make sure to put all your code in functions

function onClick() {
    $("#catch-button").click(function (e) {
        fetch("https://pokeapi.co/api/v2/pokemon", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            console.log(data);
            randomizePokemon(data)
        });
    })
}

function randomizePokemon(pokemon){
    console.log(pokemon.results)
    // get data that was passed in from on Click function

//    randomize one pokemon from array (pokemon.results)
}

onClick();