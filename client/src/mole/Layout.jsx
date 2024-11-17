import { useState } from "react";
import HeaderMole from "./HeaderMole";
import MouseHammer from "./MouseHammer";
export default function Layout({ children }) {
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

      {children}
    </div>
  );
}
