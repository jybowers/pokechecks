import React, { Component } from 'react';
import PokemonList from '../components/PokemonList';
import SearchBox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemon: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(pokemon => this.setState({ pokemon: pokemon }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { pokemon, searchfield } = this.state;
    const filteredPokemon = pokemon.filter(user => {
      return user.name.toLowerCase().includes(searchfield.toLowerCase())
    })
    return !pokemon.length ? 
      <h1>Loading...</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>Pokestats</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <PokemonList pokemon={filteredPokemon} />
          </Scroll>
        </div>
      );
    }
  }

export default App;