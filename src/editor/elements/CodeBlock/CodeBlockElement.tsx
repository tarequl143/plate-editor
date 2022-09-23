import { PlateRenderElementProps } from "@udecode/plate";
import React from "react";
import { CodeBlockWrapper } from "./styles";

const CodeBlockElement = (props: PlateRenderElementProps) => {
  const { attributes } = props;
  return <CodeBlockWrapper {...attributes}>{props.children}</CodeBlockWrapper>;
};

export default CodeBlockElement;
