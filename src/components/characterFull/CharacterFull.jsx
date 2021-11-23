import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './characterFull.css';

export default function CharacterFull({ character }) {
    console.log("🚀 ~ file: CharacterFull.jsx ~ line 6 ~ CharacterFull ~ character", character)
    const { name, status, species, gender, image, created} = character;
    return (
            <div className="row row-cols-2 p-0 card-character-full">
                <div className="p-0">
                <Card.Img className="image-full w-100" variant="top" src={image} />
                </div>
                <div className="d-flex flex-column">
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        This character was created on {new Date(created).toDateString()}
                    </Card.Text>
                    <Card.Text>
                    {/* Current location: {character.location.name} */}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Status : {status}</ListGroupItem>
                    <ListGroupItem>Specie : {species}</ListGroupItem>
                    <ListGroupItem>Gender : {gender}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Episodes</Card.Link>
                    <Card.Link >More info</Card.Link>
                </Card.Body>
                </div>
            </div>
    );
}
