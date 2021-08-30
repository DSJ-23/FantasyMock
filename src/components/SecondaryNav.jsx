/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Styles from './NavStyles';
// import styled from 'styled-components';

// const SecondaryStyles = styled.div`
//     div {
//         display: flex;
//         align-items: center;
//         justify-content: center;
//     }
// `;


const SecondaryNav = () => {

    return (
        <Fragment>
            <Styles>
                <Navbar bg="light" variant="dark">
                     <Container>
                        <Navbar.Brand>Test</Navbar.Brand>
                    </Container>
                </Navbar>
            </Styles>   
        </Fragment>
    )
}

export default SecondaryNav;