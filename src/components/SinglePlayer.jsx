import React, { Fragment } from 'react';

const SinglePlayer = ({player, playerAction}) => {
    return (
        <Fragment>
            <p onClick={() => (playerAction(player.pick))}>{player.name}</p>
        </Fragment>
    )
}

export default SinglePlayer;