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
  SeparatorWrapper,
  SpacerCloneIcon,
  SpacerDeleteIcon,
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
      }
    );
  };

  const handleDelete = () => {
    deleteBackward(props.editor);
  };

  return (
    <SeparatorWrapper
      {...props.attributes}
      onMouseEnter={() => setShowButtons(true)}
      onMouseLeave={() => setShowButtons(false)}
      focused={focused && selected}
    >
      {props.children}
      {showButtons && (
        <>
          <SpacerCloneIcon onClick={handleCopy} />
          <SpacerDeleteIcon onClick={handleDelete} />
        </>
      )}
    </SeparatorWrapper>
  );
};

export default SpacerElement;
