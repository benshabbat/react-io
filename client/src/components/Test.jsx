import { useEffect, useRef } from "react";
import { useRefCustom } from "../hooksCustom/useRefCustom";
import { stateCustom } from "../hooksCustom/useStateCustom";

export function Test() {
  const [name, setName] = stateCustom("");
  const inputRef = useRef(null);

  function addName() {
    if (inputRef.current) {
      setName(inputRef.current.value);
    }
  }
  useEffect(() => {
    console.log(inputRef.current);

    console.log(name);
  }, [name]);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={addName}>Click</button>
      <p>Current name: {name}</p>
    </>
  );
}
