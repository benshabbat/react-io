import { useState } from "react";
import HeaderMole from "./HeaderMole";
import StartGame from "./StartGame";
import MouseHammer from "./MouseHammer";
import HudMole from "./HudMole";
import LawnMole from "./LawnMole";

export default function AppMole() {
  const GAME_DURATION = 30;
  const NUMBER_OF_HOLES = 5;

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_DURATION);
  const [started, setStarted] = useState(false);
  const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));

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
    >
      <HeaderMole />
      <MouseHammer cursorPosition={cursorPosition} isActive={isActive} />
      <HudMole time={time} score={score} />
      {!started && (
        <StartGame
          setStarted={setStarted}
          holes={holes}
          setHoles={setHoles}
          setScore={setScore}
          setTime={setTime}
        />
      )}
      <LawnMole holes={holes} setHoles={setHoles} setScore={setScore} />
    </div>
  );
}
