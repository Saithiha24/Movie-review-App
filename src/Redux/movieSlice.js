import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APIKey } from '../Api/apikey'
import movieapi from '../Api/movieapi'

export const FetchAysncMovie = createAsyncThunk('movies/FetchAysncMovie',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=movie`)
     return response.data.Search
});
export const FetchAysncShow = createAsyncThunk('movies/FetchAysncShow',async (searchText)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&s=${searchText}&typ=show`)
     return response.data.Search
});

export const FetchAysncDetail = createAsyncThunk('movies/FetchAysncDetail',async (id)=>{
     const response = await movieapi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
     return response.data
});
const movieSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[],
        shows:[],
        detail:[]
       
    },
    reducers:{},
 extraReducers:{
     [FetchAysncMovie.pending]:()=>{console.log('......pending');},
     [FetchAysncMovie.rejected]:()=>{console.log('error');},
     [FetchAysncMovie.fulfilled]:(state,{payload})=>{return {...state,movies:payload}},
     [FetchAysncShow.fulfilled]:(state,{payload})=>{return {...state,shows:payload}},
     [FetchAysncDetail.fulfilled]:(state,{payload})=>{  return {...state,detail:payload}},
    }   
})
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state)=>state.movies.shows;
export const getAllDetail = (state)=>state.movies.detail;
export  default movieSlice.reducer;