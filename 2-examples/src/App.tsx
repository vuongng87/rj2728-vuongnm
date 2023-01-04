import React from 'react';
import logo from './logo.svg';
import './App.css';
import avatar from './assets/images/avatar.png'

function App() {
  return (
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <img src={avatar} alt="" />
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href={"https://google.com"} className="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  );
}

export default App;
