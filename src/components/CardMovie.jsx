import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const imageBaseUrl = import.meta.env.VITE_IMAGE_BASE_URL;

export const CardMovie = ({data}) => {

    return (
    <>
    {data && (
            <ul className="w-80">
            {data.map((datum) => (
            <li key={datum.id}>
                <Link to={`/movie/${datum.id}`}>
                <Card className="shadow-xl flex-wrap">
                    <CardHeader>
                    <CardTitle>{datum.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <img src={imageBaseUrl+datum.poster_path} alt={data.title}/>
                    </CardContent>
                    <Button>Add to favorites</Button>
                </Card>
                </Link>
            </li>
            ))}
            </ul>
    )}
    </>
    )
}