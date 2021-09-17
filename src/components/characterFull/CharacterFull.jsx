import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './characterFull.css';

export default function CharacterFull({ character }) {
    const { name, status, species, gender, location, image, created, episode } = character;
    return (
            <Card className="card-character-full">
                <Card.Img  variant="top" src={image} />
                <Card.Body>
                    <Card.Title >{name}</Card.Title>
                    <Card.Text>
                        This character was created on {new Date(created).toDateString()}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Status : {status}</ListGroupItem>
                    <ListGroupItem>Specie : {species}</ListGroupItem>
                    <ListGroupItem>Gender : {gender}</ListGroupItem>
                    <ListGroupItem>Location :  </ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Episodes</Card.Link>
                    <Card.Link >More info</Card.Link>
                </Card.Body>
            </Card>
    );
}
