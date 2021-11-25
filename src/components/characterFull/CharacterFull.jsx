import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './characterFull.css';

export default function CharacterFull({ character }) {
    const { name, status, species, gender, type, image, created, location, origin, episode } = character;

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const mapEpisode = episode?.map((epi, index) => (
        <li
            key={index}
        >{epi}</li>
    ))

    return (
        <Card className=" p-0 card-character-full align-items-center justify-content-center">
            <div className="p-4">
                <Card.Img className="image-full rounded-0 " src={image} />
            </div>
            <div className="d-flex flex-column p-3 card-full-description">
                <Card.Body>
                    <h2>{name}</h2>
                    <Card.Text>
                        This character was created on {new Date(created).toDateString()}
                    </Card.Text>
                    <Card.Text>
                        Current location: {location?.name}
                    </Card.Text>
                    <Card.Text>
                        Origin: {origin?.name}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush list-group-style">
                    <ListGroupItem>Status : {status}</ListGroupItem>
                    <ListGroupItem>Specie : {species}</ListGroupItem>
                    <ListGroupItem>Gender : {gender}</ListGroupItem>
                    {type &&
                        <ListGroupItem>Type : {type}</ListGroupItem>
                    }
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#" onClick={handleShow}>Episodes : {episode?.length}</Card.Link>
                </Card.Body>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement='end'>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Episodes</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ol>
                    {mapEpisode}
                    </ol>
                </Offcanvas.Body>
            </Offcanvas>

        </Card>
    );
}
