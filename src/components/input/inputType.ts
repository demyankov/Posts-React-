export interface InputType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  type?: string;
  props?:string;
  id?:string;
}