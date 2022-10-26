import React, { Component, useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import { simpleAction } from './actions/simpleAction'
import Agent from './agent';
import TestComp from './TestComp';

function App() {
  const dispatch=useDispatch();
  useEffect(() => {
      Agent.Articles.all(1,dispatch);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <pre>
       <TestComp/>
      </pre>
      <button onClick={simpleAction}>Test redux action</button>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;