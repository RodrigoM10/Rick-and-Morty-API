import React from 'react';
import {
    CloseButton, Col, Form, NavDropdown
} from 'react-bootstrap';


export default function SelectStatus({ setStatus,status, onSelect }) {

    const handleSelect = (e) => {
        setStatus(e.target.value)

    };

    const clearSelect = () => {
        onSelect('');
    };

    const visibleClear = status ? '' : 'invisible';


    return (
        <Form className="d-flex align-items-center ms-lg-3 my-2 my-lg-0">
        <div className="d-flex position-relative align-items-center">
        <Form.Select
                onChange={handleSelect}
                placeholder="Status"
                aria-label="filter Status"
                style={{ width: '10rem' }}
                value={status}
            >
                <option value="" disabled>Status...</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
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