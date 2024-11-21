import { useEffect, useState } from "react";

export const SearchMovies = () => {
  const [search, setSearch] = useState('');
  const [load, setLoad] = useState(true);
  /*const [ movieId, setMovieId ] = useState(true);*/
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

  useEffect(() => {
    const fetchMovies = async () => {
      if (!search) {
        setLoad(false);
        setMovies([]);
        /*setMovieId(false);*/
        return;
      /*} else if(search) {
        setLoad(true);
        setMovies(['']);*/
        /*setMovieId(true);
        const { data, setMovieId } = await fetchApi("search/movie")*/
        return;
      /*} else {*/
        const {data, error} = await fetchApi("search/movie", { query: search });
        setMovies(data.results);
        setLoad(false);
        setError(error);
      }
    };
    fetchMovies();
  }, [search]);


  if (load) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;
  
  return (<>
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