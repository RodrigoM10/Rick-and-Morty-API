import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// Main Component & Pages
import Footer from "./components/footer/Footer";
import Characters from "./pages/Characters"
import Ricks from "./pages/Ricks"
import Mortys from "./pages/Mortys"
import InterdimensionalTV from "./pages/InterdimensionalTV"
import CharacterDetails from "./pages/CharacterDetails";
import Favorites from "./pages/Favorites";
// react
import { API_URL } from './config/api';
import { Switch, Route } from "react-router-dom";
import { useState } from "react";
// Context
import { useFavoritesContext } from "./context/favoritesContext";
// Fetch 
import { useFetchAll } from "./hooks/useFetch";
import { TheNav } from "./components/theNav/TheNav";
import SideBar from "./components/sideBar/SideBar";
import { Container } from "react-bootstrap";

function App() {

  const [characters, setCharacters] = useState([]);
  const [species, setSpecies] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState('');

  const [search, setSearch] = useState('');

  // Peticion locations
  const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
  // FavoritesContext
  const { toggleFavorite, favorites } = useFavoritesContext();

  const isFavorite = (id) => {
    return favorites.some((fav) => fav === id);
  }
  // Pagination
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  // Clear Filter Functions
  const clearAllFilter = (value) => {
    setPage(1);
    setStatus(value);
    setSpecies(value);
    setLocation(value);
  }
  const clearFilterStatus = (value) => {
    setPage(1);
    setStatus(value);
  };
  const clearFilterSpecies = (value) => {
    setPage(1);
    setSpecies(value);
  };
  const clearFilterLocations = (value) => {
    setPage(1);
    setLocation(value);
  };

  return (

    <div className="background footer-fix">
      <TheNav 
      location={location}
      species={species}
      status={status}
      onSelect={clearAllFilter}
      setSearch={setSearch}
      />
      <div>
        <SideBar
      favorites={favorites}
          species={species}
          setSpecies={setSpecies}
          status={status}
          setStatus={setStatus}
          location={location}
          locations={locations}
          isLoadingLocations={isLoadingLocations}
          clearFilterStatus={clearFilterStatus}
          clearFilterSpecies={clearFilterSpecies}
          clearFilterLocations={clearFilterLocations}
          setSearch={setSearch}
        />
          <Switch>
            <Route path="/" exact>
              <Characters
                characters={characters}
                setCharacters={setCharacters}
                species={species}
                status={status}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                page={page}
                setPage={setPage}
                location={location}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                search={search}
              />
            </Route>
            <Route path="/ricks">
              <Ricks
                characters={characters}
                setCharacters={setCharacters}
                species={species}
                status={status}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                page={page}
                setPage={setPage}
                location={location}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                search={search}
              />
            </Route>
            <Route path="/mortys">
              <Mortys
                characters={characters}
                setCharacters={setCharacters}
                species={species}
                status={status}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                page={page}
                setPage={setPage}
                location={location}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                search={search}
              />
            </Route>
            <Route path="/interdimensionalTV">
              <InterdimensionalTV
                characters={characters}
                setCharacters={setCharacters}
                species={species}
                status={status}
                totalPages={totalPages}
                setTotalPages={setTotalPages}
                page={page}
                setPage={setPage}
                toggleFavorite={toggleFavorite}
                isFavorite={isFavorite}
                search={search}
              />
            </Route>
            <Route path="/favorites">
              <Favorites />
            </Route>
            <Route path="/character/:charID">
              <CharacterDetails />
            </Route>
          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
