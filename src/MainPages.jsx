import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import UnDrafted from './components/UnDrafted';
import Drafted from './components/Drafted';

const MainPages = () => {
    return (
        <Fragment>
            <Route exact path="/" component={Drafted}></Route>
            <Route exact path="/drafted" component={Drafted}></Route>
            <Route path="/undrafted" component={UnDrafted}></Route>
        </Fragment>
    )
}

export default MainPages;