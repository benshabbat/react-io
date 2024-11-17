import { useState } from "react";
const GAME_DURATION = 30;
const MOLE_SPAWN_INTERVAL = 3000;
const MOLE_SHOW_DURATION = 2000;
const NUMBER_OF_HOLES = 5;
export function useStartGame(){
    const [score, setScore] = useState(0);
    const [time, setTime] = useState(GAME_DURATION);
    const [started, setStarted] = useState(false);
    const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));
    
    
    const timerRef = useState({ current: null })[0];
    const moleTimerRef = useState({ current: null })[0];
  



    const hideMole = (holeIndex) => {
      setHoles((currentHoles) => {
        if (currentHoles[holeIndex]?.state === "up") {
          currentHoles[holeIndex] = null;
        }
        return currentHoles;
      });
    };


    const spawnMole = () => {
        const randId = Math.floor(Math.random() * NUMBER_OF_HOLES);
        setHoles((prevHoles) => {
          //if mole exists into hole
          if (prevHoles[randId]) return prevHoles;
    
          const upTimer = setTimeout(() => hideMole(randId), MOLE_SHOW_DURATION);
          prevHoles[randId] = { state: "up", timer: upTimer };
          return prevHoles;
        });
      };

      const startMoleSpawner = () => {
        moleTimerRef.current = setInterval(spawnMole, MOLE_SPAWN_INTERVAL);
      };


      const resetGame = () => {
        setStarted(false);
        setTime(GAME_DURATION);
        setScore(0);
        setHoles(Array(NUMBER_OF_HOLES).fill(null));
      };




      const clearAllTimers = () => {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        if (moleTimerRef.current) {
          clearInterval(moleTimerRef.current);
          moleTimerRef.current = null;
        }
    
        holes.forEach((hole) => {
          if (hole?.timer) {
            clearTimeout(hole.timer);
          }
        });
      };

      const endGame = () => {
        clearAllTimers();
        setStarted(false);
      };

      const startGameTimer = () => {
        timerRef.current = setInterval(() => {
          setTime((prevTime) => {
            if (prevTime <= 1) {
              endGame();
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      };


      const startGame = () => {
        clearAllTimers();
    
        resetGame();
    
        setStarted(true);
    
        startGameTimer();
    
        startMoleSpawner();
      };

      

      return {startGame,score,time, started,setScore,holes,setHoles}
}