import Animes from "./Components/Animes/Animes";
import Characters from "./Components/Characters/Characters";
import Home from "./Components/Home/Home";
import Teams from "./Components/Teams/Teams";
import Nav from "./Components/Nav";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Nav/>

        <Routes>
          <Route path="/naruto" element={<Home />} />
          <Route path="/naruto/home" element={<Home />} />
          <Route path="/naruto/characters" element={<Characters />} />
          <Route path="/naruto/teams" element={<Teams />} />
          <Route path="/naruto/animes" element={<Animes />} />
          <Route path="*" element={<Navigate to="/naruto" />} />
        </Routes>{" "}
      </Router>
    </>
  );
}

export default App;
