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
      focused={isFocused}
      {...attributes}
      contentEditable={false}
    >
      {children}
      <hr />
    </SeparatorWrapper>
  );
};

export default SeparatorElement;
