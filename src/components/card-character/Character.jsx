import React from 'react';
import { Card } from "react-bootstrap";
import './character.css';

export default function Character({ character }) {
  const { name, status, species, location, image} = character;
  // const {name, url} = location;



  return (
    <div className="my-2 px-0 card-character row ">
      <div className="col-6 px-0">
        <Card.Img className="rounded-0 char-img" src={image} />
      </div>
          <Card.Body className="col-6 d-flex flex-column justify-content-center align-items-start" >
                <Card.Title>{name}
                </Card.Title>
                <Card.Subtitle className="mb-2">{status} - {species}</Card.Subtitle>
                <Card.Title className="text-muted">Last known location:
                </Card.Title>
                <Card.Title ><h4>{location.name}</h4>
                </Card.Title>
          </Card.Body>
    </div>
  );
}
