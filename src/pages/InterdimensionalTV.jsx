import React, { useEffect, useState } from 'react';

import Character from '../components/card-character/Character';
import Pagination from '../components/pagination/Pagination';
import { SpinLoader } from '../components/spinner/Spinner';
import { API_URL } from '../config/api';
import { useFetchAll } from '../hooks/useFetch';
import { CardNoResults } from '../components/cardNoResults/CardNoResults';

import './characters.css'



export default function InterdimensionalTV(
    { characters, setCharacters, species, status, totalPages, setTotalPages, page, setPage, toggleFavorite, isFavorite }

) {

    const [allCharacters, isLoadingCharacters] = useFetchAll(`${API_URL}/character`);
    const [location, setLocation] = useState('Interdimensional Cable');
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
        <div className="d-flex flex-column justify-content-center align-items-center">
        <h2 className="title-section ">All the f*cking interdimensionalTV stars</h2>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 me-3 justify-content-end align-items-center">
          {characters.map((char) => (
            <Character
              key={char.id}
              character={char}
              onToggleFavorite={() => toggleFavorite(char.id)}
              isFavorite={isFavorite(char.id)}
            />
          ))}

          {!isLoadingCharacters && !characters.length && (
            <CardNoResults />
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
      </div>
    );
};



