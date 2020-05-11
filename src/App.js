import React, { Component } from 'react';
import PlayArrow from '@material-ui/icons/PlayArrow';

import './App.scss';

function App() {
  return (
    <>
      <div className="body" >
        <Header />
        <div className="container">
          <div className="pomodoro__player" >
            <img className="pomodoro__image" src={require('./assets/pomodoro.png')} alt="Pomodoro Timer" />
            <button className="start__button">
              <PlayArrow className="start__icon" />
            </button>
          </div>
          <h2 className="pomodoro__tracker" >25:00</h2>
        </div>
        <div className="container controll__container">
          <div className="controll">
            <h4 className="controll__title" >SESSION</h4>
            <div className="controller" >
              <button className="controll__button"> - </button>
              <h4 className="controll__value">25</h4>
              <button className="controll__button"> + </button>
            </div>
          </div>
          <div className="controll">
            <h4 className="controll__title" >BREAK</h4>
            <div className="controller" >
              <button className="controll__button"> - </button>
              <h4 className="controll__value">05</h4>
              <button className="controll__button"> + </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer" >
        <h3 className="footer__text" >Designed and Coded by: <strong>Gianlucca Claudino</strong></h3>
      </div>
    </>
  );
}

class Header extends Component {
  render() {
    return (
      <h1 className="header__title" >Pomo Tracker</h1>
    )
  }
}


export default App;
