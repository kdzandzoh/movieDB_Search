import React, { Component } from 'react';
import '../App.css';
import MovieRows from './MovieRows';

class SearchBar extends Component {
    updateInputValue(evt) {
        this.setState({inputValue: evt.target.value})
        if (evt.target.value.length > 0) {
          let url = `https://api.themoviedb.org/3/search/movie?api_key=85d3db72836e8f6a10edde7b4ae5b960&query=${evt.target.value}&include_adult=true`;
          fetch(url)
            .then(res => res.json())
            .then(json => this.setState({items: json.results}))
            .catch(error => error);
        } 
    }
}

export default SearchBar
