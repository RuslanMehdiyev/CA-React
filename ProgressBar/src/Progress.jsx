import React, { useEffect, useState } from "react";

function Progress() {
  const [count, setCount] = useState(0);
  const [filled, setFilled] = useState(0);
  const [running, setRunning] = useState(false);

  if (filled == 100) {
    setCount((prev) => (prev -= 1));
  }

  useEffect(() => {
    if (count == 0) {
      setRunning(false);
    }
  }, [count]);

  useEffect(() => {
    if (count && running && filled < 100) {
      setTimeout(() => {
        setFilled((prev) => (prev += 2));
      }, 50);
    }
  }, [running, filled]);

  return (
    <div>
      <div className="progressbar">
        <div
          style={{
            height: "100%",
            width: `${
              filled == 100 ? setFilled((prev) => (prev = 0)) : filled
            }%`,
            backgroundColor: "blue",
          }}
        ></div>
        <span className="progressPercent">{filled}%</span>
      </div>
      <button
        className="btn"
        onClick={() => {
          setRunning(true);
          setCount((prev) => (prev += 1));
          console.log(running);
        }}
      >
        Run {count == 0 ? "" : count}
      </button>
    </div>
  );
}

export default Progress;
