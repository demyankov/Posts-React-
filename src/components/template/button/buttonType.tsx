export interface Buttons
  extends Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "title" | "style" | "className"
  > {
  buttonText: string;
  maxWidth: string;
  click?: any;
}