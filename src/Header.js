import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Login from './component/Login';
import Logout from './component/Logout';
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand> Books</Navbar.Brand>
        <NavItem className='navItem'><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem className='navItem'><Link to="/MyTable" className="nav-link">Table</Link></NavItem>
        <NavItem className='navItem'><Link to="/update" className="nav-link">Update</Link></NavItem>
        <NavItem className='navItem'><Link to="/Profile" className="nav-link">Profile</Link></NavItem>
        <NavItem className='navItem'><Link to="/About" className="nav-link">About</Link></NavItem>
        <div className='button'>
        <Login />
        <Logout />
        </div>
      </Navbar>
    )
  }
}

export default Header;
