import React from "react";
import { InputWrapper, Label, InputTag } from "./inputStyles";

export interface InputType
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

function Input({ label, id, error, ...props}: InputType): JSX.Element {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputTag id={id} type={props.type} onChange = {props.onChange}/>
    </InputWrapper>
  );
}

export default Input;
