import React from 'react'
import { useParams } from 'react-router'
import { useEffect } from 'react';
import { FetchAysncDetail, getAllDetail } from '../Redux/movieSlice';
import { useDispatch,useSelector } from 'react-redux';
import './Detail.css'

const Detail = () => {
    const {imdbID} = useParams();
     const dispatch = useDispatch();
      const data = useSelector(getAllDetail);
    useEffect(() => {
    dispatch(FetchAysncDetail(imdbID))
    }, [dispatch,imdbID])

    return (
        <div className='detail'>
            <div className="content">
            <h1>{data.Title}</h1>
            <div className='rating'>
            <span>IMDBRating:{data.imdbRating}</span>
            <span>IMDBVotes:{data.imdbVotes}</span>
            <span>Runtime:{data.Runtime}</span>
            <span>Date:{data.DVD}</span>
            </div>
            <article>{data.Plot}</article>
            <div className='about'>
            <h3>Director <p>{data.Director}</p></h3>
            <h3>Star <p>{data.Actors}</p></h3>
            <h3>Genre <p>{data.Genre}</p></h3>
            <h3>Language <p>{data.Language}</p></h3>
            <h3>Awards<p>{data.Awards}</p></h3>
            </div>
            </div>
            <div className="box">
               <img alt={data.Title} src={data.Poster} />
            </div>
        </div>
    )
}

export default Detail
