import { usePlateEditorRef } from "@udecode/plate";

import { nanoid } from "nanoid";
import { RenderElementProps, useFocused, useSelected } from "slate-react";
import { ElementWrapper } from "./BlockquoteStyle";

const BlockquoteElement = (props: RenderElementProps) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  const id = nanoid();

  console.log("Blockquote props", props);

  return (
    <ElementWrapper
      {...attributes}
      className={`blockquote-element ${selected && focused ? "selected" : ""}`}
      id={id}
    >
      {children}
    </ElementWrapper>
  );
};

export default BlockquoteElement;
