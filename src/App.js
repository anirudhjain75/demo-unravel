import logo from './logo.svg';
import './App.css';
import BasicTable from './components/Table';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}} >
        <BasicTable />
      </div>
    </div>
  );
}

export default App;
