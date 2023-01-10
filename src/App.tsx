import React, {useState} from 'react';
import './App.css';
import {Messenger} from "./Components/Messager";
import {Counter} from "./Components/Сounter";


function App() {

  return (

    <div className="App">
      <Counter />
        <Messenger />
    </div>
  );
}

export default App;
