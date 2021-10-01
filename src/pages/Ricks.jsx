import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Character from '../components/card-character/Character';
import { NavRB } from '../components/navbar/TheNav';
import Pagination from '../components/pagination/PaginationJJ';
import SelectLocation from '../components/filters/SelectLocation';
import SelectSpecies from '../components/filters/SelectSpecies';
import SelectStatus from '../components/filters/SelectStatus';
import { SpinLoader } from '../components/spinner/Spinner';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';
import SideBar from '../components/sideBar/SideBar';
import { MenuItem, SubMenu } from 'react-pro-sidebar';
import { BiFilterAlt } from 'react-icons/bi';
import { GiHealthCapsule } from 'react-icons/gi';
import { RiAliensFill } from 'react-icons/ri';
import { GoLocation } from 'react-icons/go';
import './characters.css'
import { CardNoResults } from '../components/cardNoResults/CardNoResults';

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
            >
                <SubMenu title="Filter" icon={<BiFilterAlt />}>
                    <MenuItem icon={<GiHealthCapsule />}>
                        <SelectStatus
                            setStatus={setStatus}
                            status={status}
                            onSelect={clearFilterStatus}
                        />
                    </MenuItem>
                    <MenuItem icon={<RiAliensFill />}>
                        <SelectSpecies
                            setSpecies={setSpecies}
                            species={species}
                            onSelect={clearFilterSpecies}
                        />
                    </MenuItem>
                    <MenuItem icon={<GoLocation />}>
                        <SelectLocation
                            location={location}
                            locations={locations}
                            onSelect={clearFilterLocations}
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
                    {!isLoadingCharacters && !characters.length && (
                        <CardNoResults />
                    )}
                    {/* spinner */}
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
