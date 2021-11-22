import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { NavRB } from '../components/navbar/TheNav'
import SideBar from '../components/sideBar/SideBar'
import { useFavoritesContext } from '../context/favoritesContext'
import { API_URL } from '../config/api'
import { useFetch, useFetchAll } from '../hooks/useFetch'
import Character from '../components/card-character/Character'
import { CardNoResults } from '../components/cardNoResults/CardNoResults'
import { SpinLoader } from '../components/spinner/Spinner'
import Pagination from '../components/pagination/PaginationJJ'


export const Favorites = () => {
    // favorites page logic
    const { toggleFavorite, favorites } = useFavoritesContext();
    const favsParam = favorites.length ? favorites : 0;
    const [characters, isLoading] = useFetch(`${API_URL}/character/[${favsParam}]`, [])
    const [charactersFavorites, setCharactersFavorites] = useState([])

    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const limit = 9;
        const start = 0 + page * limit - limit;
        const end = start + limit;

        const charactersSlice = characters.slice(start, end);
        setCharactersFavorites(charactersSlice);
        
    const totalPages = Math.ceil(characters.length / limit);
    setTotalPages(totalPages);
    }, [characters, page])

    const isFavorite = (id) => {
        return favorites.some((fav) => fav === id);
    };

    return (
        <>
            <SideBar />
            <NavRB />
            <Container >
                <h2 className="title-section ">Favorites</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-end justify-content-sm-center align-items-center">
                    {charactersFavorites.map((char) => (
                        <Character
                            key={char.id}
                            character={char}
                            onToggleFavorite={() => toggleFavorite(char.id)}
                            isFavorite={isFavorite(char.id)}
                        />
                    ))}
                    {!isLoading && !charactersFavorites.length && (
                        <CardNoResults />
                    )}
                    <div className="position-fixed center-spinner">
                        {<SpinLoader size="lg" isLoading={isLoading} />}
                    </div>
                </div>
                <Pagination
          currentPage={page}
          totalPages={totalPages}
          onSetPage={setPage}
          isLoading={isLoading}
        />
            </Container>
        </>
    )
}
