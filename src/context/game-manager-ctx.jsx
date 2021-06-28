import React from "react";

const GameManagerContext = React.createContext({
  player: null,
  house: null,
  isWin: null,
  score: 0,
  playerPicked: (choice) => {},
  housePicked: (choice) => {},
  judge: () => {},
  reset: () => {},
});
export default GameManagerContext;
