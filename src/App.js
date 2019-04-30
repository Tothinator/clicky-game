import React, {Component} from 'react';
import './App.css';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameCard from "./components/GameCard";
import WinModal from "./components/WinModal";
import items from "./items.json";

class App extends Component {

  state = {
    score: 0,
    topScore: 0,
    items
  }

  increment = () => {
    this.setState({ score: this.state.score + 1 });
  }

  checkWin = () => {
    if (this.state.score === this.state.friends.length) {
      return true;
    } else {
      return false;
    }
  }

  shuffle = () => {
    let items = this.state.items;
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }
    this.setState({ items: items});
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
          items={this.state.items}
          increment={this.increment}
          checkWin={this.checkWin}
        />
        <WinModal />
      </Wrapper>
    );
  }
}

export default App;
