import { useState } from "react";


export default function StateManagement() {
  const [score, setScore] = useState(0);
  return (
    <div>stateManagement</div>
  )
}
export const GAME_DURATION = 30;
export const MOLE_SPAWN_INTERVAL = 3000;
export const MOLE_SHOW_DURATION = 2000;
export const NUMBER_OF_HOLES = 5;



// export const [time, setTime] = useState(GAME_DURATION);
// export const [started, setStarted] = useState(false);
// export const [holes, setHoles] = useState(new Array(NUMBER_OF_HOLES).fill(null));

// export const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
// export const [isActive, setIsActive] = useState(false);



// export const handleMouseMove = (event) => {
//   const rect = event.currentTarget.getBoundingClientRect();
//   const x = event.clientX - rect.left;
//   const y = event.clientY - rect.top;
//   setCursorPosition({ x, y });
// };
// export const handleMouseDown = () => setIsActive(true);
// export const handleMouseUp = () => setIsActive(false);

