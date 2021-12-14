import React, { useState } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const [searchValue, setSearchValue] = useState("");

    function changeSearchHandler(event) {
        setSearchValue(
            event.target.value
        );
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                <NavLink className="navbar-brand "to="/" >Book Store</NavLink>
                    <Nav className="me-auto">
                        <NavLink  className={isActive => 'nav-link ' + (isActive.isActive ? 'active': "")} to="/about" >About</NavLink>
                        <NavLink  className={isActive => "nav-link " + (isActive.isActive ? "active" : "")} to="/contact" >Contact</NavLink>
                    </Nav>
                    <div className="d-flex">
                        <input className="me-2" onChange={changeSearchHandler} placeholder="Search" value={searchValue}/>
                        <NavLink to='/booksearch' state={searchValue} className="btn btn-outline-light">Search</NavLink>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}
