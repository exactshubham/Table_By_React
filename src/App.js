import './App.css'
import React, { useState } from 'react';

function App() {

 
  const [number, setNumber] = useState('');
  const [table, setTable] = useState([]);

  const handleChange = (e) => {
    const inputNumber = e.target.value;
    setNumber(inputNumber);
    generateTable(inputNumber);
  };

  const generateTable = (num) => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(<tr key={i}><td>{num} x {i}</td><td>{num * i}</td></tr>);
    }
    setTable(rows);
  };

  return (
    <div className='main'>
       <h1> TABLE of {number} </h1>
      <input className='input' type="number" value={number} onChange={handleChange} />
      <table className="table">
        <tbody>
          {table}
        </tbody>
      </table>
    </div>
  );
}

export default App;
