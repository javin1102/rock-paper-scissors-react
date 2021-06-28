import classes from "./Heading.module.css";
import HeadingScore from "./HeadingScore";
const Heading = () => {
  return (
    <div className={classes.heading}>
      <div className={classes.text}>
        <h1>ROCK</h1>
        <h1>PAPER</h1>
        <h1>SCISSORS</h1>
      </div>
      <HeadingScore />
    </div>
  );
};
export default Heading;
