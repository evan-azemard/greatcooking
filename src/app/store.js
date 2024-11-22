import  favoriteMoviesReducer  from "@/features/favoriteMovies/favoriteMoviesSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        favoriteMovies: favoriteMoviesReducer
    }
})