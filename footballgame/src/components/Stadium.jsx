import React from "react";
import Ball from "./Ball";
import Goal from "./Goal";
import { useState } from "react";

function Stadium() {
  const [position, setPosition] = useState({ x: 400, y: 200 });
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "ArrowUp") {
      if (position.y === 0) {
        return;
      }
      setPosition({ ...position, y: position.y - 20 });
    } else if (e.key === "ArrowDown") {
      if (position.y === 400) {
        return;
      }
      setPosition({ ...position, y: position.y + 20 });
    } else if (e.key === "ArrowLeft") {
      if (position.x === 20) {
        setScore2(score2 + 1);
        setPosition({ y: (position.y = 200), x: (position.x = 400) });
      }
      setPosition({ ...position, x: position.x - 20 });
    } else if (e.key === "ArrowRight") {
      if (position.x > 755) {
        setScore1(score1 + 1);
        setPosition({ y: (position.y = 200), x: (position.x = 400) });
      }
      setPosition({ ...position, x: position.x + 20 });
    }
  };
  return (
    <>
      <div className="score">
        <h1>{score1}</h1>
        <h2>Score</h2>
        <h1>{score2}</h1>
      </div>
      <div className="stadium" tabIndex={0} onKeyDown={handleKeyPress}>
        <Goal />
        <Ball setPosition={setPosition} position={position} />
      </div>
    </>
  );
}

export default Stadium;
