import React from 'react';
import { Card } from "react-bootstrap";
import './character.css';

export default function Character({ character }) {
  const { name, status, species, location, image} = character;
  // const {name, url} = origin;
  // const {name, url} = location;

  return (
    <Card className="my-2 card-character">
        <Card.Img  variant="top" src={image} />
          <Card.Body >
                <Card.Title>{name}
                </Card.Title>
                <Card.Subtitle className="mb-2">{status} - {species}</Card.Subtitle>
                <Card.Title className="text-muted">Last known location:
                </Card.Title>
                <Card.Title ><h4>{location.name}</h4>
                </Card.Title>
          </Card.Body>
    </Card>
  );
}
