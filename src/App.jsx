import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Pages/Home"
import { Movie } from "./components/Pages/Movie"
import { Movies } from "./components/Pages/Movies"
import { Favorites } from "./components/Pages/Favorites"
import "./Style/style.css"
import './index.css';
function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <SearchMovies />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/movie/:id" Component={Movie} />
          <Route path="/movies" Component={Movies} />
          <Route path="/favorites" Component={Favorites} />
          <Route path="*" element="Erreur page 404"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
