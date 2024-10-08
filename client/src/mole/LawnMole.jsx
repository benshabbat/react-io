export default function LawnMole(props) {
  const handleHoleClick = (index) => {
    if (props.holes[index].state === "up") {
      props.setScore((prevScore) => prevScore + 10);
      props.setHoles((prevHoles) => {
        const newHoles = [...prevHoles];
        clearTimeout(newHoles[index].timer);
        const hitTimer = setTimeout(() => {
          props.setHoles((currentHoles) => {
            const updatedHoles = [...currentHoles];
            const sadTimer = setTimeout(() => {
              props.setHoles((sadHoles) => {
                const finalHoles = [...sadHoles];
                finalHoles[index] = null;
                return finalHoles;
              });
            }, 1500);
            updatedHoles[index] = { state: "sad", timer: sadTimer };
            return updatedHoles;
          });
        }, 1500);
        newHoles[index] = { state: "hit", timer: hitTimer };
        return newHoles;
      });
    }
  };
  return (
    <div id="lawn">
      {props.holes.map((hole, index) => (
        <div
          key={index}
          className={`hole ${hole ? hole.state : ""}`}
          onClick={() => handleHoleClick(index)}
        ></div>
      ))}
    </div>
  );
}
