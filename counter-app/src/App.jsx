import React from 'react';
import './App.css';
import Count from './components/Count';

var counter=0;

function App() {

  

  return (
    <div className="App">
      {
        
              <Count counter={counter}/>

      }
    </div>
  );
}

export default App;
