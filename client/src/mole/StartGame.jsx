export default function StartGame(props) {
  
  return (
    <div id="lawn">
      <div onClick={props.startGame} className="hole start"></div>
    </div>
  );
}
