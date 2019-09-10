import React from 'react';
import './App.css';
import list from './list.js';

console.log(list)

function App() {
  return (
    <div className="App">
      <table style={{width: '100%'}}>
        <tr>
          <th>name</th>
          <th>date</th>
          <th>count</th>
        </tr>

        {
          list.map((element) =>
            <tr>
              <td>{element.name}</td>
              <td>{element.date}</td>
              <td>{element.count}</td>
            </tr>)
        }

      </table>
    </div>
  );
}

export default App;
