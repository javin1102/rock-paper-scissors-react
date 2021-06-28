import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import classes from "./Components.module.css";
import GameManagerContext from "../../context/game-manager-ctx";
import { useContext } from "react";
import Choices from "../../choices/Choices";

const Playground = (props) => {
  const gameManagerContext = useContext(GameManagerContext);
  const playerPicked = (choices) => {
    gameManagerContext.playerPicked(choices);
    props.onPicked();
  };

  return (
    <div className={classes.container}>
      <svg xmlns="http://www.w3.org/2000/svg" width="305" height="277">
        <path
          fill="none"
          stroke="#000"
          strokeWidth="15"
          d="M291.5 7.5H4.574c3.119 0 52.416 84.667 147.892 254L291.5 7.5z"
          opacity=".2"
        />
      </svg>
      <Rock defaultPos={true} onClick={playerPicked.bind(null, Choices.rock)} />
      <Paper
        defaultPos={true}
        onClick={playerPicked.bind(null, Choices.paper)}
      />
      <Scissors
        defaultPos={true}
        onClick={playerPicked.bind(null, Choices.scissors)}
      />
    </div>
  );
};
export default Playground;
