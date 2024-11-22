import { fetchApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { CardMovie } from "../CardMovie";

export const Favorites = () => {

  const favoriteMoviesId = useSelector((state) => state.favoriteMovies.id);
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchFavoriteMovies = async () => {
    setLoad(true);
    setError(null);

    const moviesData = [];
    for (let id of favoriteMoviesId) {
      const { data, error } = await fetchApi(`movie/${id}`)
      setLoad(false);
      setError(error);
      moviesData.push(data);
    }
    setMovie(moviesData);

  }
  useEffect(() => {

    if (favoriteMoviesId) {
      fetchFavoriteMovies();
    }else{
      setMovie([]);
    }
  }, [favoriteMoviesId])

  if (load) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return <>
    <h1>Liste des favorit</h1>
    {movie?(
       <CardMovie movies={movie} />
    ) : <p>Aucun film en favori</p>
      }
  </>
}