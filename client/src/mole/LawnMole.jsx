import { useLawnMole } from "./useLawnMole";

export default function LawnMole({setScore,holes,setHoles}) {
  const { handleHoleClick } = useLawnMole(setScore,holes,setHoles);
  return (
    <div id="lawn">
      {holes.map((hole, index) => (
        <div
          key={index}
          className={`hole ${hole ? hole.state : ""}`}
          onClick={() => handleHoleClick(index)}
        ></div>
      ))}
    </div>
  );
}
