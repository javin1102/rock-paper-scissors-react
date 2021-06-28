import Rock from "./Rock";
import Paper from "./Paper";
import Scissors from "./Scissors";
import classes from "./Battle.module.css";
import GameManagerContext from "../../context/game-manager-ctx";
import { useContext, useEffect } from "react";
import Choices from "../../choices/Choices";
const Battle = (props) => {
  const gameCtx = useContext(GameManagerContext);

  const renderChoices = (choice) => {
    if (choice === Choices.rock) return <Rock />;
    if (choice === Choices.scissors) return <Scissors />;
    if (choice === Choices.paper) return <Paper />;
  };

  useEffect(() => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 3);
      if (random === 1) {
        gameCtx.housePicked(Choices.rock);
      } else if (random === 2) {
        gameCtx.housePicked(Choices.paper);
      } else {
        gameCtx.housePicked(Choices.scissors);
      }
      gameCtx.judge();
    }, 1000);
  }, []);

  const resetState = () => {
    gameCtx.reset();
    props.onReset();
  };

  const playerChoice = renderChoices(gameCtx.player);
  const houseChoice = renderChoices(gameCtx.house);

  const resultClass =
    gameCtx.isWin === "lose" ? `${classes.lose} ` : `${classes.win}`;

  const resultTextHandler = () => {
    if (gameCtx.isWin === "win") return "You Win";
    else if (gameCtx.isWin === "lose") return "You Lose";
    else return "Draw";
  };

  const resultText = resultTextHandler();

  return (
    <div className={classes.container}>
      <div className={classes.pick}>
        <h4>You Picked</h4>
        {playerChoice}
      </div>
      {gameCtx.isWin !== null && (
        <div className={classes.result}>
          <h2>{resultText}</h2>
          <button className={resultClass} onClick={resetState}>
            Play again
          </button>
        </div>
      )}

      <div className={classes.pick}>
        <h4>The House Picked</h4>
        {!gameCtx.house && <div className={classes.overlay}></div>}
        {!!gameCtx.house && houseChoice}
        {console.log(gameCtx.isWin)}
      </div>
    </div>
  );
};
export default Battle;
