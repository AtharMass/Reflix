import React, { Component } from 'react';
import '../styles/movieDetail.css'

export class MovieDetail extends Component {

    render() {
        const id = this.props.match.params.id
        const movie = this.props.movies[id] 

        return (
                <div id="movie-detail-container">
                    <h4> {movie.title} ( {movie.year}) </h4> 
                    <img className="img-movie-detail" src={`${movie.img}`} alt="Img-Movie" />
                    <div className="movie-description"> {movie.descrShort} </div>
                </div>
        );
    }
}