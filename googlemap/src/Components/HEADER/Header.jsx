import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import { Navigate, useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('userid');
        localStorage.removeItem('username');
        alert('Logged out successfully');
        navigate('/');
    };
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand className='icon-text'>MAP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link href="/homepage">Home</Nav.Link>
                        <Nav.Link href="/history">History</Nav.Link>
                        <Nav.Link ><button className='btn btn-outline bg-light' onClick={handleLogout}>LOGOUT</button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header