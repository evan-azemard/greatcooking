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

    const Hover = () => {
        const [isHover, setIsHover] = useState(false);
    
        const handleMouseEnter = () => {
        setIsHover(true);
        };
        const handleMouseLeave = () => {
        setIsHover(false);
        };
    
        const hoverStyle = {
            backgroundColor: "white",
            boxShadow: isHover ? "powderblue" : "0 6px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: 10,
        };

        return (
            <>
            <nav>
                <Link to="/" className="link" style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Home</Link>
                <Link to="/movies" className="link" style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Movies</Link>
                <Link to='/movie/:id' className="link" style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Movie</Link>
                <Link to='/favorites' className="link" style={hoverStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Favorites</Link>
            </nav>
            </>
        )
    }
};