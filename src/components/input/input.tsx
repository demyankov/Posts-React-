import React from "react";
import { InputWrapper, Label, InputTag } from "./inputStyles";

export interface InputType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
  type?: string;
  props?:string
}

function Input({ label, id, error, type, ...props}: InputType): JSX.Element {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputTag id={id} type={type} onChange = {props.onChange} {...props}/>
    </InputWrapper>
  );
}

export default Input;
