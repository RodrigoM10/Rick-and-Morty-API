import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { API_URL } from '../../config/api';
import { useFetch } from '../../hooks/useFetch';
import CharacterFull from '../characterFull/CharacterFull';
import { NavRB } from '../navbar/TheNav';
import { SpinLoader } from '../spinner/Spinner';

export default function CharacterDetails() {
  const {charID} = useParams();
  const [character, isLoading] = useFetch(`${API_URL}/character/${charID}`);
  return (
    <>
    <NavRB />
    <Container>
      <div className="d-flex justify-content-center align-items-center text-center m-auto">
        <CharacterFull character={character} />
        
        <div className="position-absolute center-spinner">
          {<SpinLoader size="lg" isLoading={isLoading}/>}
        </div>
      </div>
    </Container>
    </>
  );
}
