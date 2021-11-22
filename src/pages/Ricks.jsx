import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
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

import './characters.css'
import { CardNoResults } from '../components/cardNoResults/CardNoResults';
import IconGun from '../components/icons/IconGun';
import IconSpecies from '../components/icons/IconSpecies';
import IconStatus from '../components/icons/IconStatus';
import IconLocation from '../components/icons/IconLocation';


export default function Ricks(
    { characters, setCharacters, species, setSpecies, status, setStatus,
      locations, isLoadingLocations, totalPages, setTotalPages, page, setPage, location,
      toggleFavorite, isFavorite, clearFilterLocations, clearFilterSpecies, clearFilterStatus }
) {
    // Peticion allRicks
    const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character/?name=rick`);

    useEffect(() => {
        const limit = 15;
        const start = 0 + page * limit - limit;
        const end = start + limit;

        const charactersFiltered = allCharacters
            .filter((char) => !location || char.location.name === location)
            .filter((char) => !species || char.species === species)
            .filter((char) => !status || char.status === status);
        const charactersSlice = charactersFiltered.slice(start, end);
        setCharacters(charactersSlice);
        const totalPages = Math.ceil(charactersFiltered.length / limit);
        setTotalPages(totalPages);
    }, [allCharacters, page, location, species, status, setTotalPages, setCharacters]);

    return (
        <>
            <SideBar
            >
                <SubMenu title="Filter" icon={<IconGun />}>
                    <MenuItem icon={<IconStatus />}>
                        <SelectStatus
                            setStatus={setStatus}
                            status={status}
                            onSelect={clearFilterStatus}
                        />
                    </MenuItem>
                    <MenuItem icon={<IconSpecies />}>
                        <SelectSpecies
                            setSpecies={setSpecies}
                            species={species}
                            onSelect={clearFilterSpecies}
                        />
                    </MenuItem>
                    <MenuItem icon={<IconLocation />}>
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
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-end justify-content-sm-center align-items-center">
                    {characters.map((char) => (<Character
                        key={char.id}
                        character={char}
                        onToggleFavorite={() => toggleFavorite(char.id)}
                        isFavorite={isFavorite(char.id)} />
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
