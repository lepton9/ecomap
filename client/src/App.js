/* import React, {useLayoutEffect, useState} from 'react';
import './App.css';
import axios from 'axios';

function App () {
  const [randomStr, setRandomStr] = useState('');
  useLayoutEffect(() => {
    axios.get('/api/json')
    .then(res => {
      setRandomStr(res.data.test)
    })
  })
  return (
    <div>
      {randomStr}
    </div>
  );
}

export default App;
*/
import React from 'react'
import Map from './components/Map'

function App() {
  return (
    <div>
      <Map />
    </div>
  )
}

export default App;

