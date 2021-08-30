import React from 'react';
import Styles from './CenterHeader';


const HeaderMessage = ({ message, smaller }) => {
    return (
        <Styles>
            <div>
                <header>
                    {smaller ? <h3>{message}</h3> : <h1>{message}</h1>}
                </header>
            </div>
        </Styles>
    )
}

export default HeaderMessage;