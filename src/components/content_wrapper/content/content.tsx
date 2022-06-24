import React from "react";
import { ContentWrapper } from "./contentStyles";

type Props = {
  text: string;
};

function Content({ text }: Props) {
  return <ContentWrapper>{text}</ContentWrapper>;
}

export default Content;
