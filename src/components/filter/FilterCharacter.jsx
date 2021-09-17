import React from 'react';
import { Button, Col, FloatingLabel, Form, NavDropdown } from 'react-bootstrap';

export default function FilterCharacter({ setSpecies, setStatus, onSelect }) {

    const changeStatus = (event) => {
        setStatus(event.target.value)
    }
    const clearSelect = () => {
        onSelect('');
    };
    const changeSpecies = (event) => {
        setSpecies(event.target.value);
    };

    return (
        <NavDropdown title="Filter" id="collasible-nav-dropdown">
            <Form >
                <Button
                    onClick={clearSelect}
                    className={`ms-2`}
                    // variant="black"
                    aria-label="Descartar filtro"
                >Clear Filter </Button>
                <hr />
                {/* {['checkbox','radio'].map((type) => ( */}
                <Col key={`inline-radio`} sm={10} onChange={changeStatus}>
                    <Form.Check
                        type="radio"
                        label="Alive"
                        name="checkStatus"
                        value="alive"
                        id={`inline-radio-1`}
                    />
                    <Form.Check
                        type="radio"
                        label="Dead"
                        name="checkStatus"
                        value="dead"
                        id={`inline-radio-2`}
                    />
                    <Form.Check
                        type="radio"
                        label="Unknown"
                        name="checkStatus"
                        value="unknown"
                        id={`inline-radio-3`}
                    />
                     <Form.Check
                        type="radio"
                        label="All"
                        name="checkStatus"
                        value=" "
                        id={`inline-radio-4`}
                    />
                </Col>
                  {/* ))}; */}
                <FloatingLabel className="mt-3" controlId="floatingSelect" label="Specie">
                    <Form.Select
                        onChange={changeSpecies}>
                        <option value="" onClick={clearSelect}>All species</option>
                        <option value="human">Human</option>
                        <option value="alien">Alien</option>
                        <option value="animal">Animal</option>
                    </Form.Select>
                </FloatingLabel>


            </Form>
        </NavDropdown>
    );
}
