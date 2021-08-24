import React, { Fragment } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    a, .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;

    &:hover {
      color: white;
    }
  }
`;

const UnderlineNone = {'textDecoration': 'None'};

const NavigationBar = () => {

    return (
        <Fragment>
            <Styles>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Navbar</Navbar.Brand>
                            <Nav className="me-auto">
                            <Nav.Item>
                                <Nav.Link as={Link} to="/drafted" style={UnderlineNone}>Drafted</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link as={Link} to="/undrafted" style={UnderlineNone}>Drafted</Nav.Link>
                            </Nav.Item>
                            </Nav>
                    </Container>
                </Navbar>
            </Styles>   
        </Fragment>
    )
}

export default NavigationBar;