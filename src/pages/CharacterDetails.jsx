import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import { API_URL } from '../config/api';
import { useFetch } from '../hooks/useFetch';
import CharacterFull from '../components/characterFull/CharacterFull';
import { NavRB } from '../components/navbar/TheNav';
import { SpinLoader } from '../components/spinner/Spinner';
import SideBar from '../components/sideBar/SideBar';

export default function CharacterDetails() {
  const {charID} = useParams();
  const [character, isLoading] = useFetch(`${API_URL}/character/${charID}`);
  return (
    <>
    <NavRB />
    <SideBar />
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
