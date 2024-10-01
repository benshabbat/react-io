import { useState } from "react";
import HeaderMole from "./HeaderMole";
export default function AppMole() {

    const [score, setScore] = useState(100)
    const [time, setTime] = useState(30)
  return (
    <div id="game">
      <HeaderMole />
      <div id="hud">
        <div id="time">{time}</div>
        <div id="score">{score}</div>
      </div>

      <div id="lawn">
        <div className="hole"></div>
        <div className="hole hit"></div>
        <div className="hole sad"></div>
        <div className="hole up"></div>
        <div className="hole start"></div>
      </div>
    </div>
  );
}
