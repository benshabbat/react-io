import HeaderPic from "./header.png"
export default function AppMole() {
  return (
    <div id="game">

  <header><img src={HeaderPic} alt="Header pic"></img></header>

  <div id="hud">
    <div id="time">30</div>
    <div id="score">100</div>
  </div>

  <div id="lawn">
    <div className="hole"></div>
    <div className="hole hit"></div>
    <div className="hole sad"></div>
    <div className="hole up"></div>
    <div className="hole start"></div>
  </div>

</div>
  )
}
