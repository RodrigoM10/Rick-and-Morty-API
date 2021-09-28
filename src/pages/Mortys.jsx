import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Character from '../components/card-character/Character';
import { CardNoResults } from '../components/cardNoResults/CardNoResults';
import { NavRB } from '../components/navbar/TheNav';
import Pagination from '../components/pagination/PaginationJJ';
import SelectLocation from '../components/filterNavbar/SelectLocation';
import SelectStatus from '../components/filterNavbar/SelectStatus';
import SelectSpecies from '../components/filterNavbar/SelectSpecies';
import { SpinLoader } from '../components/spinner/Spinner';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';

// import PaginationRB from '../components/pagination/Pagination';
import './characters.css'
import SideBar from '../components/sideBar/SideBar';
import InputName from '../components/filterNavbar/InputName';


export default function Mortys() {
    const [characters, setCharacters] = useState([]);
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');


    const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
    const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character/?name=morty&species=${species}&status=${status}`);



    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState('');
    const [charactersFoundByFilter, setCharactersFoundByFilter] = useState('');

    useEffect(() => {
        const limit = 15;
        const start = 0 + page * limit - limit;
        const end = start + limit;

        const charactersFiltered = allCharacters.filter((char) => !location || char.location.name === location);
        setCharactersFoundByFilter(charactersFiltered);
        const charactersSlice = charactersFiltered.slice(start, end);
        setCharacters(charactersSlice);
        const totalPages = Math.ceil(charactersFiltered.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, page, location]);


    const clearFilterStatus = (value) => {
        setPage(1);
        setStatus(value);
    };
    const clearFilterSpecies = (value) => {
        setPage(1);
        setSpecies(value);
    };
    const clearFilterLocations = (value) => {
        setPage(1);
        setLocation(value);
    };

    //logica para resultados
    console.log('IS LOADING CHARACTERS', isLoadingCharacters ? 'loading' : 'loaded');
    console.log('HAY CHARATERS EN LA PAG ?: ', characters.length ? 'Hay Resultados' : 'no hay reusltados');
    console.log('CHARACTERS EN LA PAGINA', characters);
    console.log('HAY CHARATERS FILTRADOS ?: ', charactersFoundByFilter.length ? 'Hay Resultados' : 'no hay reusltados');
    console.log('CHARACTERS FILTRADOS', charactersFoundByFilter);
    console.log('CANTIDAD DE PAGINAS ', totalPages);

    // console.log('TODOS LOS MORTIS', allCharacters);


    return (
        <>
            <SideBar
                setStatus={setStatus}
                status={status}
                onSelectStatus={clearFilterStatus}
                //   
                setSpecies={setSpecies}
                species={species}
                onSelectSpecies={clearFilterSpecies}
                // 
                location={location}
                locations={locations}
                onSelectLocations={clearFilterLocations}
                isLoading={isLoadingLocations}
            >
            </SideBar>
            <NavRB />
            <div className="d-flex ">
                <Container>
                    <h2 className="title-section">ALL MORTYS</h2>
                    <div className="row row-cols-1 row-cols-lg-3  justify-content-center align-items-center">
                        {
                            (!isLoadingCharacters && characters.length)
                            &&
                            (characters.map((char) => (<Character key={char.id} character={char} />)))
                        }

                        {/* No results message ↓ */}
                        {(!characters.length && !isLoadingCharacters) && (
                            <Card className="glass-card text-center text-white-50 p-5 mt-5">
                                <Card.Title>No results</Card.Title>
                            </Card>
                        )}
                        {/* No results message ↓ */}
                        {(isLoadingCharacters && characters.length && charactersFoundByFilter.length) && (
                            <CardNoResults />

                        )}

                        {
                            (isLoadingCharacters && !charactersFoundByFilter.length)
                            &&
                            <div className="position-fixed center-spinner">
                                {<SpinLoader size="lg" />}
                            </div>
                        }

                    </div>
                    <Pagination
                        currentPage={page}
                        totalPages={totalPages}
                        onSetPage={setPage}
                        isLoading={isLoadingCharacters}
                    />
                    {/* <PaginationRB setPage={setPage} page={page} info={info}/> */}
                </Container>
            </div>
        </>
    );
};
