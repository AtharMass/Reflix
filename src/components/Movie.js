import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { FaPlusCircle, FaMinusCircle} from 'react-icons/fa';



export class Movie extends Component {
    changeAction = () => {
        let movie = this.props.movie
        const id = movie.id
        this.props.rent(id)
    }

    render() {
        let movie = this.props.movie
        return (
            <div className="movie" >
                <Link to={`/movies/${movie.id}`} >
                    <img src={`${movie.img}`} alt="Img-Movie"/>
                </Link>
                <div className={"btn-add"} onClick={this.changeAction}>{movie.isRented ? <FaMinusCircle /> : <FaPlusCircle />} </div>
            </div>
        );
    }
}