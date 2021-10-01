import React from 'react';
import {
    CloseButton, Form
} from 'react-bootstrap';


export default function SelectSpecies({ setSpecies, onSelect, species }) {

    const handleSelect = (e) => {
        setSpecies(e.target.value);
    };

    const clearSelect = () => {
        onSelect('');
    };

    const visibleClear = species ? '' : 'invisible';


    return (
        <Form className="d-flex align-items-center ms-lg-3 my-2 my-lg-0">
            <div className="d-flex position-relative align-items-center">
            <Form.Select
                    onChange={handleSelect}
                    placeholder="Species"
                    aria-label="filter species"
                    style={{ width: '10rem' }}
                    value={species}
                >
                    <option value="" disabled>Species...</option>
                    <option value="Human">Human</option>
                    <option value="Alien">Alien</option>
                    <option value="Animal">Animal</option>
                </Form.Select>
            </div>
            <CloseButton
                onClick={clearSelect}
                className={`ms-2 ${visibleClear}`}
                variant="white"
                aria-label="Descartar filtro"
            />
        </Form>
    );
}