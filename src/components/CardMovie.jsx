import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom"


const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export const CardMovie = ({data}) => {

    return (
    <>
    {data && (
        <ul>
        {data.map((datum) => (
        <li key={datum.id}>
            <Link to={`/movie/${datum.id}`}>
            <Card>
                <CardHeader>
                <CardTitle>{datum.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <img src={imageBaseUrl+datum.poster_path} alt={data.title}/>
                </CardContent>
            </Card>
            </Link>
        </li>
        ))}
        </ul>
    )}
    </>
    )
}