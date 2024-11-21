import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const Recipe = () => {

    const { id } = useParams();
    console.log(id)
    const [load, setLoad] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(`${apiBaseUrl}/recipes/${id}/information?includeNutrition=false&apiKey=${apiKey}`);
                if (response.status === 200) setData(response.data);
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
                <>
                    <ul>
                        <li>
                            <img src={data.image} />
                            <h1>{data.title}</h1>
                        </li>

                    </ul>

                    <h2>Ingredients</h2>
                    <ol>
                        {data.extendedIngredients.map((item) => (
                            <li key={item.id}>{item.original}</li>
                        ))}
                    </ol>
                    <p>
                        {data.instructions}
                    </p>
                </>
            )}

        </>
    );
};
