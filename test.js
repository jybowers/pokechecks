
const foo = (pokemon) => {
  pokemon = pokemon.map((poke, id) => poke[id].pokemon)
}
  
const url = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon() {
    const response = await fetch(url);
    const data = await response.json();
}

fetchPokemon();

for (let i = 1; i < 25; i++) {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  console.log(url+i);
 };

 async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(url);
    const data = await response.json();
}

for (let i = 1; i < 25; i++) {
  async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const response = await fetch(url+i);
    const data = await response.json();
    console.log(data.name);
  }
};

 async function fetchPokemon() {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    for (let i = 1; i < 25; i++) {
      const response = await fetch(url+i);
      const data = await response.json();
  }
}

const url = 'https://pokeapi.co/api/v2/pokemon/';

async function fetchPokemon() {
  for (let i = 1; i < 25; i++) {
    const response = await fetch(url);
    const data = await response.json();
    const pokeName = url+i;
    console.log(pokeName); 
  }
}

fetchPokemon();