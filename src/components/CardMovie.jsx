import { addFavorite, removeFavorite } from "@/features/favoriteMovies/favoriteMoviesSlice";
import { Card, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ButtonComponent } from "./ButtonComponent";

const { Meta } = Card;

export const CardMovie = ({ movies }) => {
  const moviesArray = Array.isArray(movies) ? movies : [movies];
  const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
  const dispatch = useDispatch();
  const favoriteMoviesId = useSelector(
    (state) => state.favoriteMovies.id
  );

  if (moviesArray.length === 0) {
    return <p>Aucun film à afficher.</p>;
  }

  return (
    <div style={styles.grid}>
      {moviesArray.map((movie) => (
        <Card
          key={movie.id}
          style={styles.card}
          cover={
            <img
              src={imageBaseUrl + movie.poster_path}
              alt={movie.title}
              style={styles.image}
            />
          }
        >
          <div style={styles.cardContent}>
            <Meta title={movie.title} description={movie.overview} />
            <div style={styles.buttonContainer}>

            <Link to={`/movie/${movie.id}`}>
              <ButtonComponent>Plus d'informations</ButtonComponent>
            </Link>

              {favoriteMoviesId.includes(movie.id)
                ? <ButtonComponent myFunction={() => dispatch(removeFavorite(movie.id))}>Retirer des favoris</ButtonComponent>
                : <ButtonComponent myFunction={() => dispatch(addFavorite(movie.id))}>Ajouter au favoris</ButtonComponent>
              }
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    },
    buttonContainer: {
      marginTop: "20px",
      padding: '10px',
    }
};
