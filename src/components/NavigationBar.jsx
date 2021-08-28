/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react';
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

    .whitecolor {
        color: white
    }
`;

const UnderlineNone = {'textDecoration': 'None'};
const UnderlineWhite = {'textDecoration': 'None', 'color':'white'};

const NavigationBar = () => {

    let [draft_page, set_draft_page] = useState(null);

    useEffect(() => {
        let current = window.location.pathname;
        current = current.replace("/", "");
        set_draft_page(current);
    });

    return (
        <Fragment>
            <Styles>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand>Fantasy Football</Navbar.Brand>
                            <Nav className="ml-auto">
                            <Nav.Item>
                                <Nav.Link id="drafted" as={Link} to="/drafted" style={draft_page === 'drafted' ? UnderlineWhite : UnderlineNone}>Drafted</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link id="undrafted" as={Link} to="/undrafted" style={draft_page === "undrafted" ? UnderlineWhite : UnderlineNone}>Undrafted</Nav.Link>
                            </Nav.Item>
                            </Nav>
                    </Container>
                </Navbar>
            </Styles>   
        </Fragment>
    )
}

export default NavigationBar;