import React,{useState} from 'react';
import './App.css';
import list from './list.js';


function App() {
  const [field,setField] = useState('name');
  const [sortMode,setSortMode] = useState('asc');
  const [searchText, setSearchText] = useState('')
  const onChange = (event) => setSearchText(event.target.value.toLowerCase())
  const smartSort = (a, b) => {
    if (['name', 'date'].includes(field)) {
      if(a[field] < b[field]) { return -1; }
      if(a[field] > b[field]) { return 1; }
      return 0;
    }
    if (['count'].includes(field)) {
      return a[field] - b[field];
    }
  };

  let newList = list.slice();

  if (sortMode === 'asc') {
    newList = list.slice().sort(smartSort)
  }
  if (sortMode === 'desc') {
    newList = list.slice().sort(smartSort).reverse()
  }
  return (
    <div className="App">
      <div>active: {field}</div>
      <div>sort: {sortMode}</div>
      <div onClick={() => setSortMode('asc')}>ASC</div>
      <div onClick={() => setSortMode('desc')}>DESC</div>
      <div onClick={() => setSortMode('all')}>ALL</div>
      <input type="text" name="fname" onChange={onChange} />
      <table style={{width: '100%'}}>
        <tr>
          <th onClick={() => setField('name')}>name</th>
          <th onClick={() => setField('date')}>date</th>
          <th onClick={() => setField('count')}>count</th>
        </tr>

        {
          newList.filter(element => element[field].toString().toLowerCase().includes(searchText)).map((element) =>
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
