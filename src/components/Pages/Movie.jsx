import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchApi } from "@/utils/api";
import { CardMovie } from "../CardMovie";


export const Movie = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
        const {data, error} = await fetchApi(`movie/${id}`);
        setMovie(data);
        setLoad(false);
        setError(error);

    };
    fetchMovieDetails();
  }, [id]);

  if (load) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <>
    <h1>Movie</h1>
    {movie && <CardMovie movies={movie}/>}
    </>
  );
};
