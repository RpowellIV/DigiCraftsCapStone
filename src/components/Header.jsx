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
      <Nav.Link>
          <Link to="/gameboard" className="gameboard">
            PLAY THE GAME!
          </Link>
      </Nav.Link>
      <Nav.Link>
          <Link to="/leaderboard" className="leaderboard">
            Leaderboard
          </Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/developers" className="developers">Developers</Link>
      </Nav.Link>
      <Nav.Link>
        <Link to="/">Logout</Link>
      </Nav.Link>
      </Nav>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="SEE MORE!" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link to="/leaderboard" className="leaderboard">
                Leaderboard
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/developers">Developers</Link>
            </NavDropdown.Item>
            <NavDropdown.Item href="/">Logout</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
