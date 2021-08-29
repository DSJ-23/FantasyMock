import React, { Fragment } from 'react';
import NavigationBar from './NavigationBar'
import SinglePlayer from './SinglePlayer';

const UnDrafted = ({ undraftedList, removeUndrafted}) => {

    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            {undraftedList.map(single_player => (
                <SinglePlayer key={single_player.pick} player={single_player} playerAction={removeUndrafted}></SinglePlayer>
            ))}
            
        </Fragment>
    )
}

export default UnDrafted;

