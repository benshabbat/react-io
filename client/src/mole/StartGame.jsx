export default function StartGame({ startGame }) {
  return (
    <div id="lawn">
      <div onClick={startGame} className="hole start"></div>
    </div>
  );
}
