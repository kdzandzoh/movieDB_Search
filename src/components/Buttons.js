import React, { Component } from 'react';
import '../App.css';

class Buttons extends Component {
    render() {
        return (
            <div>
                {this.props.btnMov ? 
                (
                <div className="btn-container">
                    <button className="btn btn-border" onClick={this.props.clickB1}>Movies</button>
                    <button className="btn" onClick={this.props.clickB2}>TV Shows</button> 
                </div>
                ) 
                : 
                (
                <div className="btn-container">
                    <button className="btn " onClick={this.props.clickB1}>Movies</button>
                    <button className="btn btn-border" onClick={this.props.clickB2}>TV Shows</button> 
                </div>
                )}
            </div>
        )   
    }
}

const btnStyle = {
    background: 'red',
}

export default Buttons
