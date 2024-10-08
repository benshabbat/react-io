import { useState } from "react";
import HeaderMole from "./HeaderMole";
import StartGame from "./StartGame";
import MouseHammer from "./MouseHammer";
import HudMole from "./HudMole";
import LawnMole from "./LawnMole";

export default function AppMole() {
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(30);
  const [started, setStarted] = useState(false);
  const [holes, setHoles] = useState(new Array(5).fill(null));

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const timerRef = useState({current:null})[0];
  const moleTimerRef = useState({current:null})[0];

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    setCursorPosition({ x, y });
  };
  const handleMouseDown = () => setIsActive(true);
  const handleMouseUp = () => setIsActive(false);
   
  const startGame = () => {
    setStarted(true);
    setTime(30);
    setScore(0);
    setHoles(Array(5).fill(null));

    timerRef.current = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current);
          clearInterval(moleTimerRef.current);
          setStarted(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    moleTimerRef.current = setInterval(() => {
      const randId = Math.floor(Math.random() * holes.length);
      setHoles(prevHoles => {
        const newHoles = [...prevHoles];
        const upTimer = setTimeout(() => {
          setHoles(currentHoles => {
            const updatedHoles = [...currentHoles];
            if (updatedHoles[randId] && updatedHoles[randId].state === 'up') {
                updatedHoles[randId] = null; // החפרפרת פשוט נעלמת אם לא פגעו בה
              }
              return updatedHoles;
            });
          }, 2000); // החפרפרת נשארת למעלה 2 שניות
        newHoles[randId] = { state: 'up', timer: upTimer }; 
        return newHoles;
      });
    }, 3000);
  };

  return (
    <div
      id="game"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <HeaderMole />
      <MouseHammer cursorPosition={cursorPosition} isActive={isActive} />
      <HudMole time={time} score={score}/>
      {!started && <StartGame startGame={startGame} />}
      <LawnMole holes={holes} setHoles={setHoles} setScore={setScore}/>
    </div>
  );
}




