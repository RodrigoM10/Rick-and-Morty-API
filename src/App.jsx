import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import { NavRB } from "./components/navbar/TheNav";
import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import Characters from "./components/section-characters/Characters";




function App() {

  return (
    <div className="background footer-fix">
          <img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" />
      <Header />
      <NavRB />
      <Container>
        <Characters/>
      </Container>
      <Footer />
    </div>
  );
}

export default App;
