import React from 'react'
import './MovieListing.css'
import { Link } from 'react-router-dom';

const MovieListing = (props) => {
    const movie = props.movie;
    return (
        <div>
        <Link className="archor" to={`detail/${movie.imdbID}`}>
        <div  className='card'>
            <img src={movie.Poster} alt={movie.Title}/>
            <h2>{movie.Title}</h2>
            <span>{movie.Year}</span>
        </div>
        </Link>
        </div>
    )
}

export default MovieListing
