import React from 'react';
import {
    Form, FormControl
} from 'react-bootstrap';
import './inputName.css'

export default function InputName({ searching }) {


    return (
        <Form className=" input-name d-flex justify-content-center align-items-center me-2">
            <FormControl
                name="searchName"
                onChange={searching}
                type="search"
                placeholder="Search a character..."
                className="mr-2"
                aria-label="Search"
            />
        </Form>

    );
}