import { useState } from "react";
import AppMole from "./AppMole";

export default function Store() {
  const GAME_DURATION = 30;
  const NUMBER_OF_HOLES = 5;
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(GAME_DURATION);
  const [started, setStarted] = useState(false);
  const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));

  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const store = {
    score,
    time,
    started,
    holes,
    cursorPosition,
    isActive,
  };
  const setStore = {
    setScore,
    setTime,
    setStarted,
    setHoles,
    setCursorPosition,
    setIsActive,
  };
  return <AppMole store={store} setStore={setStore} />;
}
