export default function StartGame(props) {
  return (
    <div id="lawn">
      <div onClick={props.setStarted} className="hole start"></div>
    </div>
  );
}
