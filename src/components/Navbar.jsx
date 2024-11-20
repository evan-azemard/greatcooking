import { Link } from "react-router-dom";

export function Navbar() {
    return (
    <nav>
        <Link to="/">Home</Link> 
        <Link to="/recipes">Recipes</Link>
        <Link to='/recipe'>Recipe</Link>
    </nav>)
}
