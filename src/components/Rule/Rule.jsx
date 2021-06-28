import classes from "./Rule.module.css";
const Rule = (props) => {
  return (
    <button className={classes.button} type="button" onClick={props.onClick}>
      Rules
    </button>
  );
};
export default Rule;
