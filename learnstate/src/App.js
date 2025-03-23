import React, { useState } from 'react'
import Counter from './Counter'
import Greeting from './Greeting'

export default function App() {

  // let name = '';
  // name is State below
  let [name, setName] = useState('');  // this is hook and setName is state handler...

  const handleClick = () => {
    // name = 'Kumar';
    setName('Ajay');
  };


  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick = {handleClick}> Click</button>
      <Counter/> <br /><br />
      <Greeting name = 'Harsha' age = {23} />
      <Greeting name = "Murali" last_name = 'Krishnan Reddy' />
    </div>
  );
}