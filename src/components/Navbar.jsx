import { Link } from "react-router-dom";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
  

export function Navbar() {
    return (
        <>
        <nav>
            <Link to="/" className="link">Home</Link>
            <Link to="/movies" className="link">Movies</Link>
            <Link to='/movie/:id' className="link">Movie</Link>
            <Link to='/favorites' className="link">Favorites</Link>
        </nav>
        </>
    )
}
