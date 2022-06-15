import Button from "../template/button/button";
import classes from "./confirmation.module.css";
import Title from "./title/title";
import Text from "./text/text";

function Confirmation(): JSX.Element {
  return (
    <div className={classes.confirmationWrapper}>
      <Title />
      <Text />
      <div className={classes.buttonWrapper}>
        <Button buttonText="Home" />
      </div>
    </div>
  );
}

export default Confirmation;
