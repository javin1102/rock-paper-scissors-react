import classes from "./HeadingScore.module.css";
import GameManagerContext from "../../context/game-manager-ctx";
import { useContext } from "react";
const HeadingScore = () => {
  const gameCtx = useContext(GameManagerContext);

  return (
    <div className={classes.container}>
      <p className={classes.text}>Score</p>
      <h4 className={classes.score}>{gameCtx.score}</h4>
    </div>
  );
};
export default HeadingScore;
