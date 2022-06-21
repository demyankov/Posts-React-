import Button from "../../template/button/button";
import classes from "./confirmation.module.css";
import Title from "./title/title";
import Text from "./text/text";

function Confirmation(): JSX.Element {
  return (
    <div className={classes.confirmationWrapper}>
      <Title />
      <Text />
      <Button buttonText="Home" maxWidth = '15rem'/>
    </div>
  );
}

export default Confirmation;
