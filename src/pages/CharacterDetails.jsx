import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { API_URL } from '../config/api';
import { useFetch } from '../hooks/useFetch';
import CharacterFull from '../components/characterFull/CharacterFull';
import { SpinLoader } from '../components/spinner/Spinner';
import { RiArrowGoBackLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function CharacterDetails() {
  const {charID} = useParams();
  const [character, isLoading] = useFetch(`${API_URL}/character/${charID}`);
  return (
    <>
    <nav className="navbar sticky-top py-1 px-3" bg="dark" variant="dark" expand="lg" >
                    <Button as={Link} to='/'  className="back-btn"><RiArrowGoBackLine/></Button >
                    <h2 className=" mx-auto text-center">Character Details</h2>
                    <Button as={Link} to='/'  className="back-btn"><RiArrowGoBackLine/></Button >
    </nav>
        <Container>
      <div className="d-flex justify-content-center align-items-center text-center m-auto">
        <CharacterFull character={character} />
        
        <div className="position-fixed center-spinner">
          {<SpinLoader size="lg" isLoading={isLoading}/>}
        </div>
      </div>
    </Container>
    </>
  );
}
