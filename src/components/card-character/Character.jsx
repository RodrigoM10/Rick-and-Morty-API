import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './character.css';
import { GoLocation } from 'react-icons/go';
import { VscDebugBreakpointData } from 'react-icons/vsc';
import {FaHeart} from 'react-icons/fa'


export default function Character({ character, onToggleFavorite, isFavorite }) {

  const { name, status, species, location, image, id } = character;

  return (
    <div className="p-0 card-character-container m-2 position-relative ">
        <Card as={Link} to={`character/${id}`} className=" px-0 text-decoration-none card-character row row-cols-1 row-cols-lg-2">    
        <div className="px-0">
          <Card.Img className="rounded-0 char-img glass-card" src={image} />
        </div>
        <Card.Body className="text-center text-lg-start d-flex flex-column justify-content-around align-items-center align-items-lg-start" >
          <h5 className="">{name}</h5>
          <Card.Subtitle className="mb-2">
            <VscDebugBreakpointData 
            className={status === 'Alive' ? 'me-1 text-success' : `me-1 ${status === 'Dead' ? 'text-danger' : 'text-warning'}`} />
            {status} - {species} </Card.Subtitle>
          <h5 className="m-0 d-flex align-items-start"> <GoLocation className="me-2 icon-location" /> {location.name}</h5>
        </Card.Body>
      </Card>
        <button 
        className={isFavorite? 'is-favorite-btn': 'favorite-btn'}
        onClick={onToggleFavorite}
        >
          <FaHeart />
        </button>
    </div>
  );
}
