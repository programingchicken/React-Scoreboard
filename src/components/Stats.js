import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {

const totalPlayers = props.players.length
  const currentScore = props.players.reduce( (total, player) => { 
      return total + player.score
    }, 0)

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{currentScore}</td>
        </tr>
      </tbody>
    </table>
  );
}

Stats.propTypes = {
    player: PropTypes.arrayOf(PropTypes.shape({
       score: PropTypes.number
    }))
};

export default Stats;