import { useState } from "react";
import StartGame from "./StartGame";
import HudMole from "./HudMole";
import LawnMole from "./LawnMole";
import Layout from "./Layout";
import { useStartGame } from "./useStartGame";
export default function AppMole() {


  const  {startGame,score,time, started,setScore,holes,setHoles} =  useStartGame()

  return (
    <Layout>
      <HudMole time={time} score={score} />
      {!started && (
        <StartGame
        startGame={startGame}
        />
      )}
      <LawnMole holes={holes} setHoles={setHoles} setScore={setScore} />
    </Layout>
  );
}
