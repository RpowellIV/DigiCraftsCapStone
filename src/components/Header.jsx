import React from 'react';
import { Link } from 'react-router-dom';
import TuneChamp from '../media/tuneChampImg.png';
import '../styles/Header.css';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'


let Header = () => {
  return (
<Navbar className="navs" bg="light" expand="lg">
  <Navbar.Brand href="/home"><img className='logo' src={TuneChamp} alt='TuneChamp test logo'></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="SEE MORE!" id="basic-nav-dropdown">
        <NavDropdown.Item ><Link to='/leaderboard' className='leaderboard'>Leaderboard</Link></NavDropdown.Item>
        <NavDropdown.Item ><Link to='/developers'>Developers</Link></NavDropdown.Item>
        <NavDropdown.Item href="/">Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
//     <nav>
//       <nav className='head-links'>
//         
//         <Link to='/leaderboard' className='leaderboard'>
//           Leaderboard
//         </Link>
//         <Link to='/developers'>Developers</Link>
//         <Link to='/' className='logout'>
//           LogOut
//         </Link>
//       </nav>
//     </nav>
  );
};

export default Header;
