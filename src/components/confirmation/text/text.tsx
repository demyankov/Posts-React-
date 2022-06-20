import classes from "./text.module.css";

function Text(): JSX.Element {
  return (
    <div>
      <p className={classes.text}>
<<<<<<< HEAD
        Please activate your account with the activation link in the email{" "}
=======
        Please activate your account with the activation link in the email
>>>>>>> HW_39
        <a href="mailto:demyantaurus@mail.ru"> demyantaurus@mail.ru</a>
      </p>
      <p className={classes.text}>Please check your email</p>
    </div>
  );
}

export default Text;
