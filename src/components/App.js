import React, { Component } from 'react';

import Header from './Header'

import Player from './Player'

import AddPlayerForm from './AddPlayerForm'





class App extends Component {

  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };



  changeScore = (index, deco) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += deco
      }));
    }

    handleAddPlayer = (name) => {
      this.setState( prevState => {
        return {
        players: [      
            ...prevState.players,
            {
              name,
              score: 0,
              id: this.state.players.length += 1
            }
         ]
        };
      });
    }
  


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }




  render() {
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players} 
        />

        {/* Players list */}
        {this.state.players.map( (player, index )=>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            index={index}
            changeScore={this.changeScore}
            key={player.id.toString()} 
            removePlayer={this.handleRemovePlayer}          
          />
        )}

         <AddPlayerForm 
         addPlayer={this.handleAddPlayer}
         players={this.state.players}
         />
      </div>
    );
  }
}

export default App;
