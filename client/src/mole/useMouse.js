import { useState } from "react";
export  function useMouse() {
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

    return {cursorPosition,isActive,handleMouseMove,handleMouseDown,handleMouseUp }
}
