import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchMovies } from "../SearchMovies"
import { createSlice } from '@reduxjs/toolkit';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { data } from "autoprefixer";

export const Favorites = () => {
    const [ load, setLoad ] = useState(true);
    const [ movieId, setMovieId ] = useState(true);
    const [ movieNumber, setMovieNumber ] = useState(0) /*Le nombre de films dans les favoris*/

    return (
        <>
        <form action="POST">
            <Input type="search" id="input"/>
            <Button type="submit" id="button">Search</Button>
        </form>

        <button onClick={() => setMovieNumber(movieNumber + 1) + setMovieId(movieId + 1)}>Add favorites</button>
        <button onClick={() => setMovieNumber(movieNumber - 1) + setMovieId(movieId - 1)}>Delete favorites</button>
        </>
      )
};

export const yourFavoriteMovies = createSlice({
  name: "favoriteMovies",
  id: "movie.id",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    }
  }
});

export const { increment, decrement } = yourFavoriteMovies.actions;