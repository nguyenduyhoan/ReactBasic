import { useState } from "react";
import Player from "./Component/Player";
import GameBoard from "./Component/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare () {
    setActivePlayer((currActvePlay) => currActvePlay === 'X' ? 'O' : 'X') 
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="X" isActive={activePlayer === 'X'}/>
          <Player name="Player2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activeSymbol={activePlayer}/>
      </div>
      LOG
    </main>
  ); 
}

export default App
