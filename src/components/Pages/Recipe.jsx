import { fetchApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export const Recipe = () => {
  const { id } = useParams();
  const [load, setLoad] = useState(true);
  const [movie, setMovie] = useState(null);
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
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
      {movie && (
        <>

          <h1>{movie.title}</h1>
          <img src={`${imageBaseUrl}${movie.poster_path}`}alt={movie.title}
          />
        </>
      )}
    </>
  );
};
