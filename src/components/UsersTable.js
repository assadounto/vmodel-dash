// Table.js

import React from 'react';

const Table = ({ data, keys }) => {
  return (
    <table className="user-table" style={{ borderSpacing: 0 }}>
      <thead>
        <tr style={headerRowStyle}>
          {keys.map((key, index) => (
            <th key={index} style={headerCellStyle}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
  {data.map((rowData, rowIndex) => {
    console.log("Row Data: ", rowData); // Log the rowData here
    return (
      <tr key={rowIndex} style={rowIndex % 2 === 0 ? { backgroundColor: 'white' } : { backgroundColor: '#D5D0D0' }}>
        {keys.map((key, colIndex) => (
          <td onClick={()=>alert('ddd')}  key={colIndex} style={cellStyle}>
            {rowData[key]}
          </td>
        ))}
      </tr>
    );
  })}
</tbody>
    </table>
  );
};

const headerRowStyle = {};

const headerCellStyle = {
  color: '#000',
  fontFamily: 'Montserrat',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 700,
  lineHeight: 'normal',
  backgroundColor: '#D5D0D0',
  height: 52,
};

const cellStyle = {
  color: '#000',
  fontFamily: 'Montserrat',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: 'normal',
  height: 52,
};

export default Table;
