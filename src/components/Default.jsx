import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 30%;
        left: 30%;
    }
`;

const Default = () => {
    return (
        <Styles>
            <div>
                <header>
                    <h1>This is not the page you are looking</h1>
                </header>
            </div>  
        </Styles>  
    )
}

export default Default;