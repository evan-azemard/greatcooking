import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchMovie } from "../SearchMovie";
import { fetchApi } from "@/utils/api";
import { CardMovie } from "../CardMovie";

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;


export const Movies = () => {
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const { data, error } = await fetchApi("movie/popular");
      console.log(data)
      setMovies(data.results);
      setLoad(false);
      setError(error);
    };
    fetchPopularMovies();
  }, []);

  if (load) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
      <SearchMovie />
      {movies && <CardMovie movies={movies}/>}
    </>
  );
};
