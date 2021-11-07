import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { FetchAysncMovie, FetchAysncShow } from '../Redux/movieSlice'
import { useDispatch } from 'react-redux'





const Navbar = () => {
    const [searchText, setsearchText] = useState('');
    const dispatch = useDispatch();
    const submitHandle = (e)=>{
        if(searchText===''){
          return  alert('Please Type something in search bar');
        }
        e.preventDefault();
        dispatch(FetchAysncShow(searchText));
        dispatch(FetchAysncMovie(searchText));
       
    }
    return (
        <div className='navbar'>
            <Link to='/'>
            <h2 className='logo'>
         Movies For Fa(M2F)
            </h2>
            </Link>
            <form onSubmit={submitHandle}>
                <input value={searchText} type='text'
                onChange={(e)=>{setsearchText(e.target.value)}}
                />
               <button type='submit'><i className='fa fa-search'></i></button>
            </form>
        </div>
    )
}

export default Navbar
