import Player from "./Component/Player"
import GameBoard from "./Component/GameBoard";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players" >
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="O" />
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  ); 
}

export default App
