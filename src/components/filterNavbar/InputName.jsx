import React from 'react';
import {
     Form, FormControl
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { MenuItem } from 'react-pro-sidebar';


export default function InputName({ setName }) {

    const handleChange = (event) => {
        const { value } = event.target;
        setName(value);
    };

    return (
        <Form className="d-flex">
            <FormControl
                name="searchName"
                onChange={(e) => handleChange(e)}
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
        </Form>
        
    );
}