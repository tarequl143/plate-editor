import {
  findNodePath,
  getNodeParent,
  insertNodes,
  removeNodes,
  ToolbarButton,
  ToolbarButtonProps,
  usePlateEditorState,
  withPlateEventProvider,
} from "@udecode/plate";
import { CUSTOM_ELEMENT_IMAGE_OPTION } from "../../elements/ImageOption/types";

type Props = ToolbarButtonProps;

const ImageToolbarButton = withPlateEventProvider((props: Props) => {
  const { id } = props;
  const editor = usePlateEditorState(id)!;

  const insertImagePlaceholder = () => {
    const parentNode = getNodeParent(
      editor,
      editor.selection?.anchor.path || []
    );
    const parentNodepath = findNodePath(editor, parentNode);
    removeNodes(editor, { at: parentNodepath, hanging: false });
    insertNodes(
      editor,
      {
        type: CUSTOM_ELEMENT_IMAGE_OPTION,
        children: [],
      },
      { at: parentNodepath }
    );
  };

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;
        event.preventDefault();
        event.stopPropagation();
        insertImagePlaceholder();
      }}
      {...props}
    />
  );
});

export default ImageToolbarButton;
