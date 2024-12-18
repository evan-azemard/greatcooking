import { fetchApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { CardMovie } from "./CardMovie";
import { Input } from "antd";
const { Search } = Input;

export const SearchMovie = () => {
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) {
        setLoad(false);
        setMovies([]);
        return;
      }
        const {data, error} = await fetchApi("search/movie", { query: search });
        setMovies(data.results);
        setLoad(false);
        setError(error);
    };
    fetchMovies();
  }, [search]);


  if (load) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;
  
  return (<>
    <form>
      <Search
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        placeholder="Rechercher un film"
      />
    </form>
    {movies && <CardMovie movies={movies}/>}

  </>)
}