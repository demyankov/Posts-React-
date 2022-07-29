import React from "react";
import { InputWrapper, Label, InputTag } from "./inputStyles";
import { InputType } from "./inputType";

function Input({ label, id, error, type, ...props}: InputType): JSX.Element {
  return (
    <InputWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputTag id={id} type={type?type:"text"} onChange = {props.onChange} {...props}/>
    </InputWrapper>
  );
}

export default Input;
