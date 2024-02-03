import React from 'react';
import { useState } from 'react';

import MLogo from './components/Animations/MLogo.jsx';
import Sigrid from './components/Sigrid.jsx';
import Button from './components/Button.jsx';

import './index.css';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  function helloWorld() {
      console.log("hello world");
  }

  return (
    <>
      <MLogo />
      <h1 className="text-sky-400">Hello</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="text-sky-600">
        Click on the logo to see my <code>GitHub repos</code>
      </p>
      <Button onButtonClick={helloWorld}>Click here to send to the console</Button>
      <Sigrid />
    </>
  )
}

export default App;
