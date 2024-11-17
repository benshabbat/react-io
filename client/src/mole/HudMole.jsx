export default function HudMole(props) {
  
  return (
    <div id="hud">
    <div id="time">{props.time}</div>
    <div id="score">{props.score}</div>
  </div>
  )
}
