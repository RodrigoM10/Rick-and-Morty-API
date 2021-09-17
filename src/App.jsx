import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Header } from "./components/header/Header";
import Footer from "./components/footer/Footer";

import Characters from "./pages/Characters"
import Ricks from "./pages/Ricks"
import Mortys from "./pages/Mortys"
import InterdimensionalTV from "./pages/InterdimensionalTV"

import { Switch, Route } from "react-router-dom";
import CharacterDetails from "./components/characterDetails/CharacterDetails";

function App() {


  return (
    <div className="background footer-fix">
          {/* <img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" /> */}
      <Header />
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
              
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
