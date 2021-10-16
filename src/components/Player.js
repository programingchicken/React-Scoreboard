import React, {PureComponent} from 'react';
import Counter from './Counter'
import PropTypes from 'prop-types';


class Player extends PureComponent{

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
    index: PropTypes.number,
    score: PropTypes.number.isRequired,
    removePlayer: PropTypes.func,
    changeScore: PropTypes.func
  };

  render()  {
    const {
      name,
      id,
      index,
      score,
      removePlayer,
      changeScore
    } = this.props;
    console.log(name + ' rendered')
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>

          { name }
        </span>
  
        <Counter 
        score={score} 
        changeScore={changeScore}
        index={index}
        />
      </div>
    );
  }
}

  export default Player;