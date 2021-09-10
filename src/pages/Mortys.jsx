import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Character from '../components/card-character/Character';

import './characters.css'


export default function Mortys(props) {

// ESTA SECCION SOLO CONTIENE A LOS DIFERENTES MORTYS 


    const [characters, setCharacters] = useState([]);
    const [info, setInfo] = useState([]);
    
     
    const{name, setName, species, setSpecies} = props;
    setName('morty');


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

    const prevPage = () => { setPage(page - 1) };
    const nextPage = () => { setPage(page + 1) };
    const firstPage = () => { setPage(1) };
    const lastPage = () => setPage((info.pages));

    return (
        <>
            <h2>ALL THE MORTYS</h2>
            <div className="row row-cols-1 row-cols-lg-3  justify-content-center align-items-center">
                {mapCharacters}
            </div>
            <div className="d-flex justify-content-center my-4">
                <Pagination size="lg">
                    <Pagination.Prev onClick={prevPage} disabled={page === 1} />
                    <Pagination.Item onClick={firstPage} disabled={page === 1} >{1}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item active>{page}</Pagination.Item>
                    <Pagination.Ellipsis disabled />
                    <Pagination.Item onClick={lastPage} disabled={page === info.pages} >{info.pages}</Pagination.Item>
                    <Pagination.Next onClick={nextPage} disabled={page === info.pages} />
                </Pagination>
            </div>
        </>
    );
};
