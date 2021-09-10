import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Character from '../components/card-character/Character';
import PaginationRB from '../components/pagination/Pagination';
import './characters.css'


export default function Ricks(props) {

// ESTA SECCION SOLO CONTIENE A LOS DIFERENTES RICKS 
    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    
    const{name, setName, species, setSpecies} = props;
    setName('rick');

    const [page, setPage] = useState(1);
    const [status, setStatus] = useState('');
    // const [species, setSpecies] = useState('');

    useEffect(() => {
        const request = async () => {
            try {
                const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&species=${species}`);

                const charactersRM = response.data.results;
                const infoRM = response.data.info;
                
                setInfo(infoRM);
                setCharacters(charactersRM);
                console.log("🚀infoRM", infoRM)
                console.log("🚀 charactersRM", charactersRM) 
            } catch (error) {
                console.error(error);
                alert('Hubo un error en la conexion al servidor de Rick & & Morty API')
            }
        }
        request();
        
    }, [page, name, status, species]);
    
    const mapCharacters = characters.map((char) => <Character key={char.id} character={char} /> );

    return (
        <>
            <h2>ALL THE RICKS</h2>
            <div className="row row-cols-1 row-cols-lg-3  justify-content-center align-items-center">
                {mapCharacters}
            </div>
            <PaginationRB setPage={setPage} page={page} info={info}/>
        </>
    );
};

