import axios from "axios";
import { useEffect, useState } from "react";
export const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState(null);

  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  const fetchSearchMovie = async (search) => {
    if (!search) {
      setMovies([]);
      return;
    }

    setLoad(true);
    try {
      const response = await axios.get(`${apiBaseUrl}/search/movie`, {
        params: {
          language: "fr-FR",
          query: search,
          api_key: apiKey,

        },
      });

      console.log("Résultats:", response.data.results);
      setMovies(response.data.results || []);
      setLoad(false);
    } catch (e) {
      console.error("Erreur lors de la recherche :", e);
      setLoad(false);
    }
  }
  useEffect(() => {

    fetchSearchMovie(search);
  }, [search])


  return (<>
  {load && <p>Chargement en cours</p>}
    <form>
      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Rechercher un film"
      />
    </form>
    {movies && (
      movies.map((movie) => (
        <div key={movie.id}>
          <p>{movie.title}</p>
          <img
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

      )))}
  </>)
}