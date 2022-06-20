import Button from "../template/button/button";
import classes from "./confirmation.module.css";
import Title from "./title/title";
import Text from "./text/text";

function Confirmation(): JSX.Element {
  return (
    <div className={classes.confirmationWrapper}>
      <Title />
      <Text />
<<<<<<< HEAD
      <div className={classes.buttonWrapper}>
        <Button buttonText="Home" />
      </div>
=======
      {/* <div className={classes.buttonWrapper}> */}
        <Button buttonText="Home" maxWidth = '15rem'/>
      {/* </div> */}
>>>>>>> HW_39
    </div>
  );
}

export default Confirmation;
