import axios from "axios";
import { useEffect, useState } from "react";
import { CardMovie } from "../CardMovie";
import { Navbar } from "../Navbar"
import { Proportions } from "lucide-react";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;
const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export const Movies = () => {
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
        if (response.data) setData(response.data.results);
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
    <Navbar />
    <CardMovie data= {data} />
    </>
  );
};
