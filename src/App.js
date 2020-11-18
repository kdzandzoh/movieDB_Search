import { render } from '@testing-library/react';
import { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Buttons from './components/Buttons';
import MovieRows from './components/MovieRows';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
        inputValue: '',
        items: [],
        btnMov: true,
    };
  }

  updateInputValue(evt) {
    this.setState({inputValue: evt.target.value})
    let term = '';
    //Search movie
    if (this.state.btnMov===true) {
      term = 'movie';
    }
    else {
      term = 'tv';
    }

    if (evt.target.value) {
      let url = `https://api.themoviedb.org/3/search/${term}?api_key=85d3db72836e8f6a10edde7b4ae5b960&query=${evt.target.value}`;
      fetch(url)
        .then(res => res.json())
        .then(json => this.setState({items: json.results}))
        .catch(error => error);
    } 
  }

  //Toggle to Movie
  clickB1 = () => {
    this.setState({btnMov: false});
    this.setState({items: []});
  }

  //Toggle to TV
  clickB2 = () => {
    this.setState({btnMov: true});
    this.setState({items: []});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Content">
          <Buttons btnMov={this.state.btnMov} clickB2={this.clickB1} clickB1={this.clickB2}/>
          <input className="input" onChange={evt => this.updateInputValue(evt)} placeholder="Enter search term"></input>
          <MovieRows items={this.state.items} btnMov={this.state.btnMov}/>
        </div>
      </div>
    );
  }
}

export default App;
