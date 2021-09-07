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
