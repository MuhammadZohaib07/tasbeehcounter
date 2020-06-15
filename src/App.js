import React, { useState } from 'react';
import {Message} from './message.js';
import './App.css';

export default function App() {
  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false)

  return (
    <div className={`box ${isMorning ? `dayLight`: ``}`}>

      <h1>Azkaar of {isMorning ? 'Morning' : 'Evening'}</h1>

      <Message counter={count}/>
      <br />

      <button onClick={() => setCount(count + 1)}>
        tasbeeh counter
      </button>

      <hr/>

      <button onClick={()=>setMorning(!isMorning)}>
        update 
      </button>

    </div>

  );
}

