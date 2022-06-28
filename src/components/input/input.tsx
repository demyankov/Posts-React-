import React, {useState } from "react";
import { InputWrapper, Label, InputTag } from "./inputStyles";

function Input({ label }: { label: String }): JSX.Element {
  const [inputValue, setInputValue] = useState <string | null> (null)

  return (
    <InputWrapper>
      <Label>{label}</Label>
      <InputTag onChange = {(e)=>{setInputValue(e.target.value)}} type="text" />
    </InputWrapper>
  );
}

export default Input;
