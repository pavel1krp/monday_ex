import React, {useState} from 'react';
import './App.css';
import {Messenger} from "./Components/Counter";
import {Counter} from "./Components/Messeger";


function App() {

  return (

    <div className="App">
      <Counter />
        <Messenger />
    </div>
  );
}

export default App;
