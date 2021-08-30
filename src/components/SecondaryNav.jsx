/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment } from 'react';
import { Navbar } from 'react-bootstrap';
import Styles from './NavStyles';

const colorText = { color: ' rgba(0,0,0,.9)'}

const SecondaryNav = ({ secondaryText }) => {

    return (
        <Fragment>
            <Styles>
                <Navbar bg="light" variant="dark" className="justify-content-center">
                    <Navbar.Brand style={colorText}> { secondaryText } </Navbar.Brand>
                </Navbar>
            </Styles>   
        </Fragment>
    )
}

export default SecondaryNav;