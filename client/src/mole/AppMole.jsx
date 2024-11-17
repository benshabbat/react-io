import { useState } from "react";
import StartGame from "./StartGame";
import HudMole from "./HudMole";
import LawnMole from "./LawnMole";
import Layout from "./Layout";

export default function AppMole() {
  const GAME_DURATION = 30;
  const NUMBER_OF_HOLES = 5;

  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_DURATION);
  const [started, setStarted] = useState(false);
  const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));



  return (
    <Layout>
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
    </Layout>
  );
}
