import React, { useState, useEffect } from "react";

const LadderClimbingGame = () => {
  const [destination, setDestination] = useState(
    Math.floor(Math.random() * 10) + 1
  ); // randomly place destination ladder between 1-10
  const [playerPosition, setPlayerPosition] = useState(1); // start at the bottom of the screen

  useEffect(() => {
    // automatically move player up the ladder
    if (playerPosition < destination) {
      setTimeout(() => {
        setPlayerPosition((prevPos) => prevPos + 1);
      }, 500);
    }
  }, [playerPosition, destination]);

  const handleRestart = () => {
    setDestination(Math.floor(Math.random() * 10) + 1);
    setPlayerPosition(1);
  };

  const renderLadder = (ladderIndex) => {
    // randomly place ladder on screen
    if (ladderIndex === destination) {
      return (
        <div
          key={ladderIndex}
          className="ladder"
          style={{
            top: `${(11 - ladderIndex) * 50}px`,
            left: `${ladderIndex % 2 === 0 ? "20px" : "230px"}`,
          }}
        >
          <div className="stick" />
          <div className="circle" />
        </div>
      );
    }
    return null;
  };

  const renderPlayer = () => {
    return (
      <div
        className="player"
        style={{ top: `${(11 - playerPosition) * 50}px`, left: "135px" }}
      >
        <div className="circle" />
        <div className="stick" />
      </div>
    );
  };

  return (
    <div>
      <button onClick={handleRestart}>Restart</button>
      {[...Array(10)].map((_, index) => (
        <div key={index} className="cell">
          {renderLadder(index + 1)}
        </div>
      ))}
      {renderPlayer()}
    </div>
  );
};

export default LadderClimbingGame;
