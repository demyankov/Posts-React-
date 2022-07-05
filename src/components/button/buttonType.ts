export interface Buttons
  extends Omit<
    React.HTMLAttributes<HTMLButtonElement>,
    "title" | "style" | "className"
  > {
  children?:string;
  maxWidth: string;
  click?: any;
  url?:any;
  disabled?: string;
}