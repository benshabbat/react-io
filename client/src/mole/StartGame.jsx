import { useEffect } from "react";

export default function StartGame({setTime}) {
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div id="lawn">
      <div className="hole start"></div>
    </div>
  );
}
