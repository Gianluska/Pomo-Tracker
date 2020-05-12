import React, { Component } from 'react';
import PlayArrow from '@material-ui/icons/PlayArrow';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionTrack: 25,
      breakTrack: 5,
      actualValueTrack: 25,
      isBreak: false,
      isActive: false
    }

    this.startTrack = this.startTrack.bind(this);
    this.incrementSession = this.incrementSession.bind(this);
    this.decrementSession = this.decrementSession.bind(this);
  }

  startTrack() {
    let state = this.state;
    state.actualValueTrack = state.sessionTrack;
    state.isActive = true;

    let timer = setInterval(() => {
      if (state.actualValueTrack <= 0.01) {        
        state.isActive = false;
        console.log('ACABOOOU');
        clearInterval(timer);
      } else {
        state.actualValueTrack -= 0.01;
        this.setState(state);
      }
    }, 1000);

    this.setState(state);
  }

  incrementSession() {
    let state = this.state;
    
    if (!state.isActive && state.sessionTrack < 60) {
      state.sessionTrack++;
      state.actualValueTrack = state.sessionTrack;
    }

    this.setState(state);
  }
  
  decrementSession() {
    let state = this.state;
    
    if (!state.isActive && state.sessionTrack > 1) {
      state.sessionTrack--;
      state.actualValueTrack = state.sessionTrack;
    }
  
    this.setState(state);
  }

  render() {
    return (
      <>
        <div className="body" >
          <Header />
          <div className="container">
            <div className="pomodoro__player" >
              <img className="pomodoro__image" src={require('./assets/pomodoro.png')} alt="Pomodoro Timer" />
              <button onClick={this.startTrack} className="start__button">
                <PlayArrow className="start__icon" />
              </button>
            </div>
            <h2 className="pomodoro__tracker"> {this.state.actualValueTrack.toFixed(2)} </h2>
          </div>
          <div className="container controll__container">
            <div className="controll">
              <h4 className="controll__title" >SESSION</h4>
              <div className="controller" >
                <button onClick={this.decrementSession} className="controll__button"> - </button>
                <h4 className="controll__value"> {this.state.sessionTrack.toFixed(0)} </h4>
                <button onClick={this.incrementSession} className="controll__button"> + </button>
              </div>
            </div>
            <div className="controll">
              <h4 className="controll__title" >BREAK</h4>
              <div className="controller" >
                <button className="controll__button"> - </button>
                <h4 className="controll__value"> {this.state.breakTrack.toFixed(0)} </h4>
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
}
class Header extends Component {
  render() {
    return (
      <h1 className="header__title" >Pomo Tracker</h1>
    )
  }
}



export default App;
