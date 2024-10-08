import { useState } from "react";
import HeaderMole from "./HeaderMole";
import StartGame from "./StartGame";
import MouseHammer from "./MouseHammer";
import HudMole from "./HudMole";
import LawnMole from "./LawnMole";

export default function AppMole() {
  const GAME_DURATION = 30;
  const MOLE_SPAWN_INTERVAL = 3000;
  const MOLE_SHOW_DURATION = 2000;
  const NUMBER_OF_HOLES = 5;

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_DURATION);
  const [started, setStarted] = useState(false);
  const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const timerRef = useState({ current: null })[0];
  const moleTimerRef = useState({ current: null })[0];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCursorPosition({ x, y });
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);

  // const spawnMole = () => {
  //   const randId = Math.floor(Math.random() * NUMBER_OF_HOLES);
  //   setHoles((prevHoles) => {
  //     //if mole exists into hole
  //     if (prevHoles[randId]) return prevHoles;

  //     const upTimer = setTimeout(() => hideMole(randId), MOLE_SHOW_DURATION);
  //     prevHoles[randId] = { state: "up", timer: upTimer };
  //     return prevHoles;
  //   });
  // };

  // const startMoleSpawner = () => {
  //   moleTimerRef.current = setInterval(spawnMole, MOLE_SPAWN_INTERVAL);
  // };

  // const hideMole = (holeIndex) => {
  //   setHoles((currentHoles) => {
  //     if (currentHoles[holeIndex]?.state === "up") {
  //       currentHoles[holeIndex] = null;
  //     }
  //     return currentHoles;
  //   });
  // };

  // const startGame = () => {
  //   clearAllTimers();

  //   resetGame();

  //   setStarted(true);

  //   startGameTimer();

  //   startMoleSpawner();
  // };

  // const resetGame = () => {
  //   setStarted(false);
  //   setTime(GAME_DURATION);
  //   setScore(0);
  //   setHoles(Array(NUMBER_OF_HOLES).fill(null));
  // };

  // const startGameTimer = () => {
  //   timerRef.current = setInterval(() => {
  //     setTime((prevTime) => {
  //       if (prevTime <= 1) {
  //         endGame();
  //         return 0;
  //       }
  //       return prevTime - 1;
  //     });
  //   }, 1000);
  // };
  // const endGame = () => {
  //   clearAllTimers();
  //   setStarted(false);
  // };

  // const clearAllTimers = () => {
  //   if (timerRef.current) {
  //     clearInterval(timerRef.current);
  //     timerRef.current = null;
  //   }
  //   if (moleTimerRef.current) {
  //     clearInterval(moleTimerRef.current);
  //     moleTimerRef.current = null;
  //   }

  //   holes.forEach((hole) => {
  //     if (hole?.timer) {
  //       clearTimeout(hole.timer);
  //     }
  //   });
  // };
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
          moleTimerRef={moleTimerRef}
          timerRef={timerRef}
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
