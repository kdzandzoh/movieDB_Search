import React, { Component } from 'react'
import '../App.css'

class MovieRows extends Component {
    render() {
        let term;
        this.props.btnMov ? term='movie' : term='tv';
        const link ='https://image.tmdb.org/t/p/w200';
        return (
            <div className="parent">
                {this.props.items.map((item) => (
                        <div className="card-container">
                            <div className="header-container">
                                <h3>
                                    {this.props.btnMov ? `${item.title}` : `${item.name}`}
                                </h3>
                            </div>
                            <div className="image-container">
                                <img className="poster" src={`${link}${item.poster_path}`} alt="poster"/>
                            </div>
                            <div className="text-container">
                                <p>{item.overview}</p>
                                <a href={`https://www.themoviedb.org/${term}/${item.id}`} target="_blank" rel="noreferrer"><button className="moreInfo">More info</button></a>
                            </div> 
                        </div>
                ))
                }
            </div>
        );
    }
}

export default MovieRows