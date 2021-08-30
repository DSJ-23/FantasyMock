/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import NavItem from './NavItem';
import Styles from './NavStyles';

const NavigationBar = () => {

    return (
        <Fragment>
            <Styles>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Fantasy Football</Navbar.Brand>
                            <Nav className="ml-auto">
                                <NavItem page={"drafted"}></NavItem>
                                <NavItem page={"undrafted"}></NavItem>
                            </Nav>
                    </Container>
                </Navbar>
            </Styles>   
        </Fragment>
    )
}

export default NavigationBar;