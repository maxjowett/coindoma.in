import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';

class App extends Component {
  // componentDidMount = () => {
  //   this.getCoins();
  // };
  // getCoins = () => {
  //   axios.get('https://api.coinranking.com/v1/public/coins')
  //   .then(response => console.log(response))
  // };
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
      </div>
    );
  }
}

export default App;
