/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import styled from 'styled-components';
import NavItem from './NavItem';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

    &:hover {
      color: white;
    }
  }

    .whitecolor {
        color: white
    }
`;

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