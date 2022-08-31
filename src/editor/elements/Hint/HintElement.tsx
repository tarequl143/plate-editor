import { usePlateEditorRef } from "@udecode/plate";
import { nanoid } from "nanoid";
import { RenderElementProps, useFocused, useSelected } from "slate-react";
import { ElementWrapper, HintIcon } from "./HintStyle";

const HintElement = (props: RenderElementProps) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  const id = nanoid();

  console.log("Hint props", props);

  return (
    <ElementWrapper
      {...attributes}
      className={`hint-element ${selected && focused ? "selected" : ""}`}
    >
      <HintIcon contentEditable={false} suppressContentEditableWarning>
        (!)
      </HintIcon>
      {children}
    </ElementWrapper>
  );
};

export default HintElement;
