import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Character from '../components/card-character/Character';
import FilterCharacter from '../components/filter/FilterCharacter';
import { NavRB } from '../components/navbar/TheNav';
import Pagination from '../components/pagination/PaginationJJ';
import SelectLocation from '../components/filterNavbar/SelectLocation';
import SelectSpecies from '../components/filterNavbar/SelectSpecies';
import SelectStatus from '../components/filterNavbar/SelectStatus';
import { SpinLoader } from '../components/spinner/Spinner';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';

// import PaginationRB from '../components/pagination/Pagination';

import './characters.css'
import SideBar from '../components/sideBar/SideBar';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { BiFilterAlt } from 'react-icons/bi';
import { GiHealthCapsule } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';

export default function Ricks() {
    const [characters, setCharacters] = useState([]);
    const [species, setSpecies] = useState('');
    const [status, setStatus] = useState('');



    const [locations, isLoadingLocations] = useFetchAll(`${API_URL}/location`);
    const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character/?name=rick`);

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [location, setLocation] = useState('');

    useEffect(() => {
        const limit = 15;
        const start = 0 + page * limit - limit;
        const end = start + limit;

        const charactersFiltered = allCharacters
            .filter((char) => !location || char.location.name === location)
            .filter((char) => !species || char.species === species)
            .filter((char) => !status || char.status === status);
        const charactersSlice = charactersFiltered.slice(start, end);
        console.log("🚀 ~ file: Characters.jsx ~ line 44 ~ useEffect ~ charactersFiltered", charactersFiltered)
        setCharacters(charactersSlice);
        console.log('SPECIES', species);
        const totalPages = Math.ceil(charactersFiltered.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, page, location, species, status]);


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

    return (
        <>
            <SideBar
                setStatus={setStatus}
                status={status}
                onSelectStatus={clearFilterStatus}
                setSpecies={setSpecies}
                species={species}
                onSelectSpecies={clearFilterSpecies}
                location={location}
                locations={locations}
                onSelectLocations={clearFilterLocations}
                isLoading={isLoadingLocations}
            >
                <SubMenu title="Filter" icon={<BiFilterAlt />}>
                    <MenuItem icon={<GiHealthCapsule />}>
                        <SelectStatus
                            setStatus={setStatus}
                            status={status}
                            onSelectStatus={clearFilterStatus}
                        />
                    </MenuItem>
                    <MenuItem icon={<RiAliensFill />}>
                        <SelectSpecies
                            setSpecies={setSpecies}
                            species={species}
                            onSelectSpecies={clearFilterSpecies}
                        />
                    </MenuItem>
                    <MenuItem icon={<GoLocation />}>
                        <SelectLocation
                            location={location}
                            locations={locations}
                            onSelectLocations={clearFilterLocations}
                            isLoading={isLoadingLocations}
                        />
                    </MenuItem>

                </SubMenu>
            </SideBar>
            <NavRB />
            <Container>
                <h2 className="title-section">ALL RICKS</h2>
                <div className="row row-cols-1 row-cols-lg-3  justify-content-center align-items-center">
                    {characters.map((char) => (<Character key={char.id} character={char} />
                    ))}

                    {/* No results message ↓ */}
                    {!characters.length && !isLoadingCharacters && (
                        <Card className="glass-card text-white-50 p-5 mt-5">
                            <Card.Title>Sin resultados</Card.Title>
                        </Card>
                    )}

                    <div className="position-fixed center-spinner">
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
