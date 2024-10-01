import { useState, useEffect } from "react";
import HeaderMole from "./HeaderMole";
import StartGame from "./StartGame";
import MouseHammer from "./MouseHammer";

export default function AppMole() {
  const [score, setScore] = useState(100);
  const [time, setTime] = useState(30);
  const [started, setStarted] = useState(false);


  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  
  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCursorPosition({ x, y });
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
  return (
    <div
      id="game"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <HeaderMole />
      <MouseHammer cursorPosition={cursorPosition} isActive={isActive} />
      <div id="hud">
        <div id="time">{time}</div>
        <div id="score">{score}</div>
      </div>

      {/* <StartGame setTime={setTime}/> */}

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
