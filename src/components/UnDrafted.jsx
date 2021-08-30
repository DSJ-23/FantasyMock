import React, { Fragment } from 'react';
import NavigationBar from './NavigationBar'
import BootstrapTable from 'react-bootstrap-table-next';
import HeaderMessage from './HeaderMessage';
import columns from './columns';
import SecondaryNav from './SecondaryNav';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const UnDrafted = ({ undraftedList, removeUndrafted}) => {

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          removeUndrafted(row.pick)
        }
    };

    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <SecondaryNav secondaryText={"Click on a player's row to draft"}></SecondaryNav>
            {undraftedList.length > 0 ? <BootstrapTable bootstrap4  keyField="pick" data={undraftedList} columns={columns} rowEvents={ rowEvents }></BootstrapTable> : <HeaderMessage message={"No players left, have a good one"} smaller={true}></HeaderMessage>}     
        </Fragment>
    )
}

export default UnDrafted;


