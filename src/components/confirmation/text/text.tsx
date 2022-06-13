import classes from "./text.module.css";

function Text(): JSX.Element {
  return (
    <div>
      <p className={classes.text}>
        Please activate your account with the activation link in the email{" "}
        <a href="mailto:demyantaurus@mail.ru"> demyantaurus@mail.ru</a>
      </p>
      <p className={classes.text}>Please check your email</p>
    </div>
  );
}

export default Text;
