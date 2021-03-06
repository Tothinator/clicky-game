import React, {Component} from "react";
import "./App.css";
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
    win: false,
    lose: null,
    items,
    guessedItems: []
  }

  increment = (id) => {

    // Reset the game if the user has won, to do this, if guessed items is empty, reset win to false and lose to false
    if (this.state.guessedItems.length === 0) {
      this.setState({
        win: false,
        lose: null
      })
    }

    if (this.state.guessedItems.filter(item => item.id === id).length === 1){

      // User guessed previously guessed image, reset score to 0 after updating topScore
      // Display lose alert and shuffle after display
      this.setState({ lose: true });
      this.setState({ score: 0 });
      this.setState({ guessedItems: []});

    } else {
      // If the item isn't in previously guessed then filter items and push that
      // to guessed state, THEN remove item from items state
      this.setState( state => { 
        const guessedItems =  state.guessedItems.concat(
          this.state.items.filter(
            item => item.id === id)[0]
        );
        console.log(guessedItems);
        return {
          score: state.score,
          topScore: state.topScore,
          win: state.win,
          lose: state.lose,
          items: state.items,
          guessedItems: guessedItems
        }
      });
      
      //user guessed new image, add to score and shuffle images
      //also set lose to false so the middle title updates
      this.setState(
        { 
          score: this.state.score + 1,
          lose: false
        }, () => {

          // Increases top score!
          (this.state.score > this.state.topScore) && this.setState({ topScore: this.state.score });

          // User Wins!!
          if (this.state.score === this.state.items.length) {

            console.log("Success!");
            this.setState({ 
              score: 0,
              guessedItems: [],
              win: true
            });
          }

        });

      this.shuffle();
    }
  }

  reset = () => {
    this.setState({
      score: 0,
      win: false,
      lose: null,
      guessedItems: []
    });
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
          lose={this.state.lose}
          win={this.state.win} 
        />
        <Hero />
        <div className="container card-container row justify-content-center">
          {this.state.items.map(item => (
            <GameCard
              id={item.id}
              key={item.id}
              title={item.title}
              image={item.image}
              increment={this.increment}
              lose={this.state.lose}
              win={this.state.win} 
            />
          ))}
        </div>
        <WinModal
          win={this.state.win} 
        />
      </Wrapper>
    );
  }
}

export default App;
