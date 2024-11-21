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
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuTrigger><Link to="/">Home</Link></NavigationMenuTrigger>
                <NavigationMenuTrigger><Link to="/movies">Movies</Link></NavigationMenuTrigger>
                <NavigationMenuTrigger><Link to='/movie/:id'>Movie</Link></NavigationMenuTrigger>
                <NavigationMenuTrigger><Link to='/favorites'>Favorites</Link></NavigationMenuTrigger>
                <NavigationMenuContent>
                    <NavigationMenuLink><Link to="/movies">Movies</Link></NavigationMenuLink>
                    <NavigationMenuLink><Link to='/movie/:id'>Movie</Link></NavigationMenuLink>
                    <NavigationMenuLink><Link to='/favorites'>Favorites</Link></NavigationMenuLink>
                </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}
