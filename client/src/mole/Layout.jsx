import HeaderMole from "./HeaderMole";
import MouseHammer from "./MouseHammer";
import { useMouse } from "./useMouse";
export default function Layout({ children }) {
  const {
    cursorPosition,
    isActive,
    handleMouseMove,
    handleMouseDown,
    handleMouseUp,
  } = useMouse();
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
