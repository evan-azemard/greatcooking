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
            <Link to="/" class="link">Home</Link>
            <Link to="/movies" class="link">Movies</Link>
            <Link to='/movie/:id' class="link">Movie</Link>
            <Link to='/favorites' class="link">Favorites</Link>
        </nav>
        </>
    )
}
