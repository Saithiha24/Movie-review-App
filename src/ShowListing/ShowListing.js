import React from 'react'
import { Link } from 'react-router-dom';
import '../MovieListing/MovieListing.css'

const ShowListing = (props) => {
    const show = props.show;
    return (
        <Link className='archor' to={`detail/${show.imdbID}`}>
        <div  className='card'>
            <img src={show.Poster} alt={show.Title}/>
            <h2>{show.Title}</h2>
            <span>{show.Year}</span>
        </div>
        </Link>
    )
}

export default ShowListing
