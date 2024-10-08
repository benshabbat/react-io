export default function LawnMole(props) {
  const handleHoleClick = (index) => {
    if (props.holes[index] && props.holes[index].state === "up") {
      props.setScore((prevScore) => prevScore + 10);
      props.setHoles((prevHoles) => {
        clearTimeout(prevHoles[index].timer);
        const hitTimer = setTimeout(() => {
          props.setHoles((currentHoles) => {
            const sadTimer = setTimeout(() => {
              props.setHoles((sadHoles) => {
                sadHoles[index] = null;
                return sadHoles;
              });
            }, 1500);
            currentHoles[index] = { state: "sad", timer: sadTimer };
            return currentHoles;
          });
        }, 1500);
        prevHoles[index] = { state: "hit", timer: hitTimer };
        return prevHoles;
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
