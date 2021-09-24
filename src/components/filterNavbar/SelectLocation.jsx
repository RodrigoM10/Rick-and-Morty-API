import React from 'react';
import {
    CloseButton, Form
} from 'react-bootstrap';


export default function SelectLocation({ locations, location, isLoading, onSelect }) {

    const handleSelect = (e) => {
        onSelect(e.target.value);
    };

    const clearSelect = () => {
        onSelect('');
    };

    const visibleClear = location ? '' : 'invisible';


    return (
        <Form className="d-flex align-items-center ms-lg-3 my-2 my-lg-0">
            <div className="d-flex position-relative align-items-center">
                <Form.Select
                
                    // className="select-filter"
                    placeholder="Locations"
                    aria-label="filter locations"
                    style={{ width: '10rem' }}
                    onChange={handleSelect}
                    value={location}
                >
                    <option value="" disabled>
                        Localizaciones...
                    </option>

                    {/* Location options ↓ */}
                    {locations.map((loc) => (
                        <option key={loc.id}>{loc.name}</option>
                    ))}
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
