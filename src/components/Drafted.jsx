import React  from 'react';
import NavigationBar from '../components/NavigationBar';
import columns from './columns';
import HeaderMessage from './HeaderMessage';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const Drafted = ({ draftedList, unDraft }) => {

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
          unDraft(row.pick)
        }
    };

    return (
        <div>
            <NavigationBar></NavigationBar>
            {draftedList.length > 0 ? <BootstrapTable keyField="pick" data={draftedList} columns={columns} rowEvents={ rowEvents }></BootstrapTable> : <HeaderMessage message={"No players have been drafted"} smaller={true}></HeaderMessage>}
        </div>
    )
}

export default Drafted;