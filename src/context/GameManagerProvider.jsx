import GameManagerContext from "./game-manager-ctx";
import { useReducer } from "react";
import Choices from "../choices/Choices";
const defaultGameState = {
  player: null,
  house: null,
  isWin: null,
  score: 0,
};

const gameManagerReducer = (state, action) => {
  if (action.type === "PLAYER_PICKED") {
    return {
      ...state,
      player: action.choice,
    };
  }
  if (action.type === "HOUSE_PICKED") {
    return {
      ...state,
      house: action.choice,
    };
  }

  if (action.type === "JUDGE") {
    if (
      (state.player === Choices.paper && state.house === Choices.rock) ||
      (state.player === Choices.rock && state.house === Choices.scissors) ||
      (state.player === Choices.scissors && state.house === Choices.paper)
    ) {
      return {
        ...state,
        isWin: "win",
        score: state.score + 1,
      };
    } else if (
      (state.player === Choices.paper && state.house === Choices.scissors) ||
      (state.player === Choices.rock && state.house === Choices.paper) ||
      (state.player === Choices.scissors && state.house === Choices.rock)
    ) {
      let newScore;
      if (state.score > 0) newScore = state.score - 1;
      else newScore = 0;
      return {
        ...state,
        isWin: "lose",
        score: newScore,
      };
    } else {
      return {
        ...state,
        isWin: "draw",
      };
    }
  }

  if (action.type === "RESET") {
    return {
      ...defaultGameState,
      score: state.score,
    };
  }
  return defaultGameState;
};

const GameManagerProvider = (props) => {
  const [gameManagerState, dispatchAction] = useReducer(
    gameManagerReducer,
    defaultGameState
  );

  const playerPickedHandler = (choice) => {
    dispatchAction({ type: "PLAYER_PICKED", choice: choice });
  };
  const housePickedHandler = (choice) => {
    dispatchAction({ type: "HOUSE_PICKED", choice: choice });
  };
  const judgeHandler = () => {
    dispatchAction({ type: "JUDGE" });
  };
  const resetHandler = () => {
    dispatchAction({ type: "RESET" });
  };

  const gameManagerContext = {
    player: gameManagerState.player,
    house: gameManagerState.house,
    isWin: gameManagerState.isWin,
    score: gameManagerState.score,
    playerPicked: playerPickedHandler,
    housePicked: housePickedHandler,
    judge: judgeHandler,
    reset: resetHandler,
  };

  return (
    <GameManagerContext.Provider value={gameManagerContext}>
      {props.children}
    </GameManagerContext.Provider>
  );
};
export default GameManagerProvider;
