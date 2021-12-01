import { AiOutlineClear } from 'react-icons/ai';
import InputName from '../filters/InputName';
import { useLocation } from 'react-router-dom';
import './theNav.css'
import { useState } from 'react';
export const TheNav = ({ location, species, status, onSelect, setSearch }) => {
    const locationUse = useLocation();
    const { pathname } = locationUse;
    const splitLocation = pathname.split("/");

    let filter = `${location}, ${species}, ${status}`
    let filterArr = filter.split(',');
    
    const visibleBtn = location || species || status ? '' : 'invisible';
    const visibleTag = location || species || status ? '' : 'invisible';

    const mapFilterArr = filterArr.map((filtered, index) => (
        <li
            key={index}
            className={`mx-1 breadcrumb-item ${visibleTag}`}>{filtered}</li>
    ))

    const clearFilter = () => {
        onSelect('');
    };

    // Funcion de busqueda
    const Searching = (e) => {
        e.preventDefault();
        const keyword = e.target.value;
        setSearch(keyword);
    };

    return (
        <>{
            splitLocation[1] !== 'character' &&
            <nav className="d-none d-md-flex navbar sticky-top py-1 px-3 " bg="dark" variant="dark" expand="lg"  >
                <ol className="d-none breadcrumb ms-auto d-md-flex align-items-center justify-content-between mb-0">
                    {mapFilterArr}
                    <li className="mx-2 ">
                        <button
                            onClick={clearFilter}
                            className={`mx-2 remove-btn pb-1 ${visibleBtn}`}
                            variant="white"
                            aria-label="Descartar filtro"
                        >
                            <AiOutlineClear />
                        </button>
                    </li>
                </ol>
                <div className="d-none d-md-block">
                    <InputName Searching={Searching} />
                </div>
            </nav>
        }

        </>
    )
}

