export default function StartGame(props) {
  const GAME_DURATION = 30;
  const MOLE_SPAWN_INTERVAL = 3000;
  const MOLE_SHOW_DURATION = 2000;
  const NUMBER_OF_HOLES = 5;

  const startMoleSpawner = () => {
    moleTimerRef.current = setInterval(spawnMole, MOLE_SPAWN_INTERVAL);
  };
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
  
  const startGame = () => {
    clearAllTimers();

    resetGame();

    setStarted(true);

    startGameTimer();

    startMoleSpawner();
  };
  const resetGame = () => {
    setStarted(false);
    setTime(GAME_DURATION);
    setScore(0);
    setHoles(Array(NUMBER_OF_HOLES).fill(null));
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
  const endGame = () => {
    clearAllTimers();
    setStarted(false);
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
  return (
    <div id="lawn">
      <div onClick={startGame} className="hole start"></div>
    </div>
  );
}
