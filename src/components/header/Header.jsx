import React from 'react';
import './header.css';

export default function Header() {
  return (
      <header className="header-style d-flex flex-column justify-content-center ">
        <h1>Rick and Morty </h1>
       <img className="poopy-img" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1630686328/rick%20and%20morty/PikPng.com_rick-and-morty-png_3568759_lo2kna.png" />
      </header>
  );
}
