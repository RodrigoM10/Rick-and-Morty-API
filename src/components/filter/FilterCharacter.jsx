import React from 'react';
import { FloatingLabel, Form, NavDropdown } from 'react-bootstrap';

export default function FilterCharacter({setSpecies, setStatus}) {


    const changeSpecies = (event) => {
        setSpecies(event.target.value);
    };

  return (
    <NavDropdown title="Filter" id="collasible-nav-dropdown">
    <Form>
        {['radio'].map((type) => (
            <div key={`default-${type}`} className="mx-1 mb-3">
                <Form.Check
                    type={type}
                    id={`${type}`}
                    label={`Alive`}
                />
                <Form.Check
                    type={type}
                    label={`Dead`}
                    id={`${type}`}
                />
                <Form.Check
                    type={type}
                    label={`unknown`}
                    id={`${type}`}
                />
            </div>
        ))}
        <FloatingLabel controlId="floatingSelect" label="Specie">
            <Form.Select onChange={changeSpecies}>
                <option value="">All species</option>
                <option value="Human">Human</option>
                <option value="Alien">Alien</option>
                <option value="Animal">Animal</option>
            </Form.Select>
        </FloatingLabel>
    </Form>
</NavDropdown>
  );
}
