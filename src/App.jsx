import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from "./components/footer/Footer";

import Characters from "./pages/Characters"
import Ricks from "./pages/Ricks"
import Mortys from "./pages/Mortys"
import InterdimensionalTV from "./pages/InterdimensionalTV"

import { Switch, Route } from "react-router-dom";
import CharacterDetails from "./pages/CharacterDetails";
import { Favorites } from "./pages/Favorites";

function App() {


  return (
    
    <div className="background footer-fix">
          <Switch>
              <Route path="/" exact>
                <Characters  />
              </Route>

              <Route path="/ricks">
                <Ricks />
              </Route>

              <Route path="/mortys">
                <Mortys/>
              </Route>

              <Route path="/interdimensionalTV">
                <InterdimensionalTV />
              </Route>

              <Route path="/character/:charID">
                <CharacterDetails />
              </Route>

              <Route path="/favorites">
                <Favorites />
              </Route>
              
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
