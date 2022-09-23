import { PlateRenderElementProps } from "@udecode/plate";
import React from "react";
import { useFocused, useSelected } from "slate-react";
import { SeparatorWrapper } from "./separatorStyle";

const SeparatorElement = (props: PlateRenderElementProps) => {
  const { attributes, children } = props;
  const focused = useFocused();
  const selected = useSelected();
  const isFocused = focused && selected;

  return (
    <SeparatorWrapper
      {...attributes}
      focused={isFocused}
      contentEditable={false}
      className={`separator-element ${selected && focused ? "selected" : ""}`}
    >
      {children}
      <hr />
    </SeparatorWrapper>
  );
};

export default SeparatorElement;
