import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Character from '../components/card-character/Character';
import FilterCharacter from '../components/filter/FilterCharacter';
import { NavRB } from '../components/navbar/TheNav';
import Pagination from '../components/pagination/PaginationJJ';
import SelectLocation from '../components/selectLocation/SelectLocation';
import { SpinLoader } from '../components/spinner/Spinner';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';

// import PaginationRB from '../components/pagination/Pagination';

import './characters.css'

export default function Mortys() {
    const [characters, setCharacters] = useState([]);
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');
    const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
    const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character/?species=${species}&status=${status}`);

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState('');

    useEffect(() => {
        const limit = 15;
        const start = 0 + page * limit - limit;
        const end = start + limit;

        const charactersFiltered = allCharacters.filter((char) => !location || char.location.name === location);
        const charactersSlice = charactersFiltered.slice(start, end);
        setCharacters(charactersSlice);
        const totalPages = Math.ceil(charactersFiltered.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, page, location, species]);

    const handleSelect = (value) => {
        setPage(1);
        setLocation(value);
        setStatus(value);
        setSpecies(value);
    };

    return (
        <>
            <NavRB>
                <FilterCharacter
                    setSpecies={setSpecies}
                    setStatus={setStatus}
                    onSelect={handleSelect}
                />
                <SelectLocation
                    location={location}
                    locations={locations}
                    onSelect={handleSelect}
                    isLoading={isLoadingLocations}
                />
            </NavRB>
            <Container>
                <h2 className="title-section ">ALL CHARACTERS</h2>
                <div className="row row-cols-1 row-cols-lg-3  justify-content-center align-items-center">
                    {characters.map((char) => (<Character key={char.id} character={char} />
                    ))}

                    {/* No results message ↓ */}
                    {!characters.length && !isLoadingCharacters && (
                        <Card className="glass-card text-white-50 p-5 mt-5">
                            <Card.Title>Sin resultados</Card.Title>
                        </Card>
                    )}

                    <div className="center-spinner">
                        {<SpinLoader size="lg" isLoading={isLoadingCharacters} />}
                    </div>

                </div>
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onSetPage={setPage}
                    isLoading={isLoadingCharacters}
                />

                {/* <PaginationRB setPage={setPage} page={page} info={info}/> */}
            </Container>
        </>
    );
};
