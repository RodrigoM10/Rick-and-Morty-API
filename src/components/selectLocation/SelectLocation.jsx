import React from 'react';
import {
    CloseButton, Form
} from 'react-bootstrap';
import { SpinLoader } from '../spinner/Spinner';
import './selectLocation.css'

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
                    className="select-location"
                    placeholder="Localizaciones..."
                    aria-label="Filtro por localización"
                    style={{ width: '12rem' }}
                    onChange={handleSelect}
                    disabled={isLoading}
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

                <div
                    className="ms-1 position-absolute input-spinner"
                >
                    <SpinLoader isLoading={isLoading} size="md" />
                </div>
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
