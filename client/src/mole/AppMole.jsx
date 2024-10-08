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
  const [holes, setHoles] = useState(Array(5).fill(null));

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
   
  const handleHoleClick = (index) => {
    if (holes[index].state === 'up') {
      setScore(prevScore => prevScore + 10);
      setHoles(prevHoles => {
        const newHoles = [...prevHoles];
        clearTimeout(newHoles[index].timer);
        const hitTimer = setTimeout(() => {
          setHoles(currentHoles => {
            const updatedHoles = [...currentHoles];
            const sadTimer = setTimeout(() => {
              setHoles(sadHoles => {
                const finalHoles = [...sadHoles];
                finalHoles[index] = null;
                return finalHoles;
              });
            }, 1500);
            updatedHoles[index] = { state: 'sad', timer: sadTimer };
            return updatedHoles;
          });
        }, 1500);
        newHoles[index] = { state: 'hit', timer: hitTimer };
        return newHoles;
      });
    }
  };
 
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
      setHoles(prevHoles => {
        const newHoles = [...prevHoles];
        const emptyHoles = newHoles.map((hole, index) => ({ index, hole })).filter(({ hole }) => hole === null);
        if (emptyHoles.length > 0) {
          const { index } = emptyHoles[Math.floor(Math.random() * emptyHoles.length)];
          const upTimer = setTimeout(() => {
            setHoles(currentHoles => {
              const updatedHoles = [...currentHoles];
              if (updatedHoles[index] && updatedHoles[index].state === 'up') {
                updatedHoles[index] = null; // החפרפרת פשוט נעלמת אם לא פגעו בה
              }
              return updatedHoles;
            });
          }, 2000); // החפרפרת נשארת למעלה 2 שניות
          newHoles[index] = { state: 'up', timer: upTimer };
        }
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
      {!started && <StartGame setStarted={startGame} />}
      <LawnMole holes={holes} handleHoleClick={handleHoleClick}/>
    </div>
  );
}




