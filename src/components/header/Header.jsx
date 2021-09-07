import React from 'react';
import './header.css';

export default function Header() {
  return (
      <header className="header-style d-flex justify-content-center">
       <img className="mx-2 title-img img-fluid" src="https://res.cloudinary.com/dcx1rcwvu/image/upload/v1631035944/rick%20and%20morty/rick-and-morty-31015_a3zpre.png" />
       <h1 className="subtitle">All the characters in one place </h1>
      </header>

  );
}
