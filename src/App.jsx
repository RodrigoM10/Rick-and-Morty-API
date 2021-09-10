/* eslint-disable jsx-a11y/alt-text */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/header/Header";
import { NavRB } from "./components/navbar/TheNav";
import { Container } from "react-bootstrap";
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Characters from "./components/pages/Characters";
import Ricks from "./components/pages/Ricks";
import Mortys from "./components/pages/Mortys";
import InterdimensionalTV from "./components/pages/InterdimensionalTV";




function App() {
  // const [locationName, setLocationName] = useState('');
  const [section, setSection] = useState('characters');
  
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  




  return (
    <div className="background footer-fix">
          {/* <img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" /> */}
      <Header />
      <NavRB  setSection={setSection} setName={setName} setSpecies={setSpecies} />
      <Container>
        {section === 'characters' && <Characters setName={setName} name={name}  setSpecies={setSpecies} species={species} />}

        {section === 'ricks' && <Ricks  setName={setName} name={name} setSpecies={setSpecies} species={species} />}

        {section === 'mortys' && <Mortys setName={setName} name={name}  setSpecies={setSpecies} species={species}/>}

        {section === 'interdimensionalTV' && <InterdimensionalTV setName={setName} name={name}  setSpecies={setSpecies} species={species}/>}
      </Container>  
      <Footer />
    </div>
  );
}

export default App;
