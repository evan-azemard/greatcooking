import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SearchMovie } from "../SearchMovie";
import { fetchApi } from "@/utils/api";

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
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img src={imageBaseUrl + movie.poster_path} alt={movie.title} />
                <h1>{movie.title}</h1>
              </Link>
            </li>
          ))}
        </ul>
      )}

    </>
  );
};
