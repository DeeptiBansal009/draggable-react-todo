import React from 'react';
import Board from 'react-trello'
import data from '../../data.json'
function ListBoard(props) {
    return (
        <div>
          <Board data={data} />  
        </div>
    );
}

export default ListBoard;