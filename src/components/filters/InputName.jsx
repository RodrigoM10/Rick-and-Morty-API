import React from 'react';
import {
    Form, FormControl
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

export default function InputName({ setName }) {

    const handleChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    return (
        <Form className="d-flex justify-content-center align-items-center">
            <FormControl
                name="searchName"
                onChange={(e) => handleChange(e)}
                type="search"
                placeholder="Search a character..."
                className="mr-2"
                aria-label="Search"
            />
            <span className="icon-search me-2 h-100" >
                <BiSearch />
            </span>
        </Form>

    );
}