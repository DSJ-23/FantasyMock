import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

const UnderlineNone = {'textDecoration': 'None'};
const UnderlineWhite = {'textDecoration': 'None', 'color':'white'};

const NavItem = ({page}) => {

    let [draft_page, set_draft_page] = useState(null);

    useEffect(() => {
        let current = window.location.pathname;
        current = current.replace("/", "");
        set_draft_page(current);
    }, []);

    let capitalize = (s) => {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    return (
        <Nav.Item>
            <Nav.Link id={page} as={Link} to={page} style={draft_page === page ? UnderlineWhite : UnderlineNone}>{capitalize(page)}</Nav.Link>
        </Nav.Item>
    )
}

export default NavItem;
