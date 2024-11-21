import { Card, Button } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;

export const CardMovie = ({movies}) => {

    const moviesArray = Array.isArray(movies) ? movies : [movies];

    

    const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

    return (
      <div style={styles.grid}>
        {moviesArray.map((movie) => (
          <Card
            key={movie.id}
            hoverable
            style={styles.card}
            cover={
              <img
                src={imageBaseUrl + movie.poster_path}
                alt={movie.title}
                style={styles.image}
              />
            }
          >
            <Meta title={movie.title} description={movie.overview.slice(0, 100) + "..."} />
            <Link to={`/movie/${movie.id}`}>
              <Button type="primary" style={styles.button}>
                Plus d'infos
              </Button>
            </Link>
          </Card>
        ))}
      </div>
    );
  }
  
  const styles = {
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      padding: "20px",
      with: "100px"
    },
    card: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
    },
    image: {
      height: "300px",
      objectFit: "cover",
    },
    button: {
      marginTop: "10px",
      width: "100%",
    },
  };