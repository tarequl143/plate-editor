import { PlateRenderElementProps } from "@udecode/plate";
import React from "react";
import { CodeBlockWrapper } from "./styles";

type Props = {};

const CodeBlockElement = (props: PlateRenderElementProps) => {
  const { attributes } = props;
  return <CodeBlockWrapper {...attributes}>{props.children}</CodeBlockWrapper>;
};

export default CodeBlockElement;
