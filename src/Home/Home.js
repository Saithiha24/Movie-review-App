import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import MovieListing from '../MovieListing/MovieListing'
import './Home.css'
import { v4 } from 'uuid'
import { FetchAysncMovie, FetchAysncShow, getAllMovies, getAllShows } from '../Redux/movieSlice'
import ShowListing from '../ShowListing/ShowListing'
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const searchMovies ='Harry';
        const searchShows = 'Friend'
        dispatch(FetchAysncMovie(searchMovies));
        dispatch(FetchAysncShow(searchShows));
    }
    ,[dispatch]);

    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows)
    return (
        <div  className='Home'> 
        <h1>Movies</h1>
        <div className='home'>
       
            {movies.map((movie)=>(<MovieListing  movie={movie} key={v4()}/>))}
      
       </div>
         <h1>Shows</h1>
         <div className='home'>
        
            {shows.map((show)=>(<ShowListing  show={show} key={v4()}/>))}
       
         </div>
        </div>
    )
}

export default Home
