import React, { Component } from 'react';

import './App.scss';

function App() {
  return (
    <div className="body" >
      <Header />
      <div className="container" >
        <img src={require('./assets/pomodoro.png')} alt="Pomodoro Timer"/>
      </div>
    </div>
  );
}

class Header extends Component {
  render() {
    return(
      <h1 className="header__title" >Pomo Tracker</h1>
    )
  }
}


export default App;
