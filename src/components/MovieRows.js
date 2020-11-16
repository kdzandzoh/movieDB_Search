import React, { Component } from 'react'
import '../App.css'

class MovieRows extends Component {
    render() {
        let term;
        this.props.btnMov ? term='movie' : term='tv';
        const link ='https://image.tmdb.org/t/p/w200';
        return (
            this.props.items.map((item) => (
                <table key={item.id} className="row">
                <tbody>
                    <tr>
                        <td>
                            <img className="poster" src={`${link}${item.poster_path}`} alt="poster"/>
                        </td>
                        <td >
                            <h3>
                                {this.props.btnMov ? `${item.title}` : `${item.name}`}
                            </h3>
                            <p><span className="text">{item.overview}</span></p>
                            <a href={`https://www.themoviedb.org/${term}/${item.id}`} target="_blank"><button className="moreInfo">More info</button></a>
                        </td>
                    </tr>
                </tbody>
            </table>    
        ))
        );
    }
}

export default MovieRows
