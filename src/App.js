import React,{useState} from 'react';
import './App.css';
import list from './list.js';


function App() {
  const [field,setField] = useState('name')
  const [searchText, setSearchText] = useState('')
  const onChange = (event) => setSearchText(event.target.value.toLowerCase())
  return (
    <div className="App">
      <div>active: {field}</div>
      <input type="text" name="fname" onChange={onChange}/>
      <table style={{width: '100%'}}>
        <tr>
          <th onClick={() => setField('name')}>name</th>
          <th onClick={() => setField('date')}>date</th>
          <th onClick={() => setField('count')}>count</th>
        </tr>

        {
          list.filter(element => element[field].toString().toLowerCase().includes(searchText)).map((element) =>
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
