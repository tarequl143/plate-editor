import { usePlateEditorRef } from "@udecode/plate";
import { nanoid } from "nanoid";
import { RenderElementProps, useFocused, useSelected } from "slate-react";
import { ElementWrapper } from "./HintStyle";

const HeadingElement = (props: RenderElementProps) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  const id = nanoid();

  console.log("H1 props", props);

  return (
    <ElementWrapper
      {...attributes}
      as="h1"
      className={`h1-element ${selected && focused ? "selected" : ""}`}
    >
      {children}
    </ElementWrapper>
  );
};

export default HeadingElement;
