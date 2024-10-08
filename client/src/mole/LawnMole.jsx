export default function LawnMole(props) {
  return (
    <div id="lawn">
    {props.holes.map((hole, index) => (
        <div 
          key={index} 
          className={`hole ${hole ? hole.state : ''}`}
          onClick={() => props.handleHoleClick(index)}
        ></div>
      ))}
    </div>
  )
}
