import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar } from "./components/Navbar"
import { Home } from "./components/Pages/Home"
import { Recipe } from "./components/Pages/Recipe"
import { Recipes } from "./components/Pages/Recipes"

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/recipe/:id" Component={Recipe} />
          <Route path="/recipes" Component={Recipes} />
          <Route path="*" element="Erreur page 404"/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
