export default function LawnMole(props) {
  const HIDE_DELAY = 500;

  const updateHoleState = (index, state, delay = 0) => {
    return new Promise((resolve) => {
      const timer = setTimeout(() => {
        props.setHoles((currentHoles) => {
          currentHoles[index] = state === null ? null : { state, timer };
          return currentHoles;
        });
        resolve();
      }, delay);
    });
  };

  const handleHoleClick = async (index) => {
    const hole = props.holes[index];
    if (!hole || hole.state !== "up") return;

    // Clear existing timer
    clearTimeout(hole.timer);
    
    // Update score
    props.setScore(prevScore => prevScore + 10);
    
    // Show hit animation
    await updateHoleState(index, "hit");
    
    // Show sad animation
    await updateHoleState(index, "sad", HIDE_DELAY);
    
    // Hide the mole
    await updateHoleState(index, null, HIDE_DELAY);
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
