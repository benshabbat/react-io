import { useStartGame } from "./useStartGame";

export default function StartGame() {

  const {startGame} =  useStartGame()



  return (
    <div id="lawn">
      <div onClick={startGame} className="hole start"></div>
    </div>
  );
}
