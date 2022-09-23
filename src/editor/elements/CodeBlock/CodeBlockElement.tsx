import { PlateRenderElementProps } from "@udecode/plate";
import React from "react";
import { useFocused, useSelected } from "slate-react";
import { CodeBlockWrapper } from "./styles";

const CodeBlockElement = (props: PlateRenderElementProps) => {
  const { attributes } = props;
  const selected = useSelected();
  const focused = useFocused();
  return (
    <CodeBlockWrapper
      {...attributes}
      className={`code-element ${selected && focused ? "selected" : ""}`}
    >
      {props.children}
    </CodeBlockWrapper>
  );
};

export default CodeBlockElement;
