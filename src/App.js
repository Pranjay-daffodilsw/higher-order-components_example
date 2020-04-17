import React from 'react';
import './App.css';
import ButtonOne from './components/buttonOne';
import ButtonTwo from './components/buttonTwo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        header
      </header>
      <ButtonOne />
      <hr />
      <ButtonTwo alternateStyle = {true} />
    </div>
  );
}

export default App;
