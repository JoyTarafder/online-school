import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import '../Css/bootstrap.min.css'
import './Navigation.css'

const Navigation = () => {
    return (
        <div className='container'>
            <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Online School</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#courses">Courses</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                    <Button  variant="success" className='gap'>Sign up</Button>
                    <Button variant="info" className='gap'>Log in</Button>
                </Form>
            </Navbar>
            </div>
        </div>
    );
};

export default Navigation;