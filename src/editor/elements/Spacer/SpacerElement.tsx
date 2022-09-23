import {
  deleteBackward,
  findNodePath,
  insertNodes,
  PlateRenderElementProps,
} from "@udecode/plate";
import { useState } from "react";
import { Path } from "slate";
import { useFocused, useSelected } from "slate-react";
import {
  SpacerCloneIcon,
  SpacerDeleteIcon,
  SpacerWrapper,
} from "./SpacerStyle";
import { CUSTOM_ELEMENT_SPACER } from "./types";

const SpacerElement = (props: PlateRenderElementProps) => {
  const focused = useFocused();
  const selected = useSelected();
  const [showButtons, setShowButtons] = useState(false);

  const handleCopy = () => {
    const currentPath = findNodePath(props.editor, props.element)!;
    insertNodes(
      props.editor,
      {
        type: CUSTOM_ELEMENT_SPACER,
        children: [],
      },
      {
        at: Path.next(currentPath),
      },
    );
  };

  const handleDelete = () => {
    deleteBackward(props.editor);
  };

  return (
    <SpacerWrapper
      {...props.attributes}
      focused={focused && selected}
      contentEditable={false}
      className={`spacer-element ${selected && focused ? "selected" : ""}`}
    >
      {props.children}

      <SpacerCloneIcon onClick={handleCopy} />
      <SpacerDeleteIcon onClick={handleDelete} />
    </SpacerWrapper>
  );
};

export default SpacerElement;
