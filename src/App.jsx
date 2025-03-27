import Animes from "./Components/Animes/Animes";
import Characters from "./Components/Characters/Characters";
import Home from "./Components/Home/Home";
import Teams from "./Components/Teams/Teams";
import Nav from "./Components/Nav";
import GetAnimeBySearch from './Components/Animes/GetAnimeBySearch';
import FilteredAnime from "./Components/Animes/FilteredAnime";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {useState , createContext} from "react"
export const filteredAnimeContext = createContext();

function App() {
  const [filteredAnime, setFilteredAnime] = useState([]);


  return (
    <filteredAnimeContext.Provider value={{filteredAnime, setFilteredAnime}}>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/naruto" element={<Home />} />
          <Route path="/naruto/home" element={<Home />} />
          <Route path="/naruto/characters" element={<Characters />} />
          <Route path="/naruto/teams" element={<Teams />} />
          <Route path="/naruto/animes" element={<Animes />} />
          <Route path="*" element={<Navigate to="/naruto" />} />
          <Route path="/naruto/animes/:search" element={<GetAnimeBySearch />} />
          <Route path="/naruto/animes/:search/:id" element={<FilteredAnime />} />
        </Routes>{" "}
      </Router>
    </filteredAnimeContext.Provider>
  );
}

export default App;
