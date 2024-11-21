import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageBaseUrl = import.meta.env.imageBaseUrl;
export const Recipes = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(`${apiBaseUrl}/popular`, {
          params: {
            api_key: apiKey,
            language: 'fr-FR'
          }
        });
        console.log(response.data.results)
        if (response.results) setData(response.data.results);
        else console.log("Error");

        setLoad(false);
      } catch (e) {
        console.log("Error:", e);
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  console.log(data)
  if (load) return <p>Loading...</p>;
  return (
    <>
      {data && (
        <ul>
          {data.map((datum) => (
            <li key={datum.id}>
              <Link to={`/recipe/${datum.id}`}>
                <img src={imageBaseUrl+datum.poster_path} />
                <h1>{datum.title}</h1>
              </Link>
            </li>
          ))}
        </ul>
      )}

    </>
  );
};
