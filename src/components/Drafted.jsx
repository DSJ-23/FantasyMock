import React, { Fragment } from 'react';
import NavigationBar from '../components/NavigationBar';
import SinglePlayer from './SinglePlayer';

const Drafted = ({ draftedList, unDraft }) => {
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            {draftedList.map(single_player => (
                <SinglePlayer key={single_player.pick} player={single_player} playerAction={unDraft}></SinglePlayer>
            ))}
        </Fragment>
    )
}

export default Drafted;