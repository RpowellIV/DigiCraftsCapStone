import React from 'react';
import { Link } from 'react-router-dom';
import TuneChamp from '../media/tuneChampImg.png';
import '../styles/Header.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

let Header = () => {
  return (
    <Navbar className="navs" bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img className="logo" src={TuneChamp} alt="TuneChamp test logo"></img>
      </Navbar.Brand>
      <Nav className="mr-auto headerlinks">
      <Nav.Link as={Link} to="/gameboard" className="gameboard">
        PLAY THE GAME!
      </Nav.Link>
      <Nav.Link as={Link} to="/leaderboard" className="leaderboard">
        Leaderboard
      </Nav.Link>
      <Nav.Link as={Link} to="/developers" className="developers">
        Developers
      </Nav.Link>
      <Nav.Link as={Link} to="/">
        Logout
      </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Navbar>
  );
};

export default Header;
