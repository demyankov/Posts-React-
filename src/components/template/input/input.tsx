import React from "react";
import classes from "./input.module.css";
import { InputWrapper, Label, InputTag } from "./inputStyles";

function Input({ label }: { label: String }): JSX.Element {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputTag type="text" />
    </InputWrapper>
  );
}

export default Input;
