import React, {Component} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import WinModal from "./components/WinModal"

class App extends Component {

  state = {
    score: 0,
    topScore: 0
  }

  increment = () => {
    this.setState({ score: this.state.score + 1 });
  }

  checkWin = () => {
  }

  render() {
    return (
      <Wrapper>
        <Navbar 
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Hero />
        <GameCard
          increment={this.increment}
          checkWin={this.checkWin}
        />
        <WinModal />
      </Wrapper>
    );
  }
}

export default App;
