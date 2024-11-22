import { createSlice } from "@reduxjs/toolkit";

export const favoriteMoviesSlice = createSlice({

    name: 'favoriteMovies',
    initialState:{
        id: []
    },
    reducers: {
        addFavorite: (state, action) => {
            if(!state.id.includes(action.payload)){
                state.id.push(action.payload);
            }
        },
        removeFavorite: (state, action) => {
            state.id = state.id.filter((id) => id !== action.payload)
        }
    }
});

export const {addFavorite, removeFavorite} = favoriteMoviesSlice.actions;

export default favoriteMoviesSlice.reducer;