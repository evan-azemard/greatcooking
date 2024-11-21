import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;
export const Recipe = () => {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await axios.get(`${apiBaseUrl}/movie/${id}`, {
          params: {
            api_key: apiKey,
            language: 'fr-FR'
          }
        });

        console.log("response: ", response)
        console.log("(response.data: ", response.data)
        if (response.data) setData(response.data);
        else console.log("Error");

        setLoad(false);
      } catch (e) {
        console.log("Error:", e);
        setLoad(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {


  },)

  console.log("data: ", data)
  if (load) return <p>Loading...</p>;

  return (
    <>
 
      <h1>Movie</h1>
      {data && (
        <ul>

          <li>
            <img src={imageBaseUrl + data.poster_path} alt={data.title} />
            <h1>{data.title}</h1>
          </li>

        </ul>
      )}

    </>
  );
};
