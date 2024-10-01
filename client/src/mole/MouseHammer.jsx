import hammerCursor from "./hammer-tool.png";
export default function MouseHammer(props) {
  return (
    <div
    style={{
      position: "absolute",
      left: `${props.cursorPosition.x}px`,
      top: `${props.cursorPosition.y}px`,
      width: "100px",
      height: "100px",
      backgroundImage: `url(${hammerCursor})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      pointerEvents: "none",
      zIndex: 1000,
      transform: `translate(-50%, -50%) ${
        props.isActive ? "rotate(-45deg)" : ""
      }`,
      transition: "transform 0.1s ease-out",
    }}
  ></div>
  )
}
