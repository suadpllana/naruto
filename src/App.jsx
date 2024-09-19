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
          <Route path="/narutoReact" element={<Home />} />
          <Route path="/narutoReact/home" element={<Home />} />
          <Route path="/narutoReact/characters" element={<Characters />} />
          <Route path="/narutoReact/teams" element={<Teams />} />
          <Route path="/narutoReact/animes" element={<Animes />} />
          <Route path="*" element={<Navigate to="/naruto" />} />
        </Routes>{" "}
      </Router>
    </>
  );
}

export default App;
