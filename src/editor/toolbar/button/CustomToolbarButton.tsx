import {
  BlockToolbarButton,
  deleteBackward,
  getPluginType,
  setNodes,
  toggleNodeType,
  usePlateEditorRef,
  wrapNodes,
} from "@udecode/plate";
import { ToolbarButtonProps } from "@udecode/plate-ui-toolbar";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../../elements/BulletedList/types";
import { CUSTOM_ELEMENT_LIST_ITEM } from "../../elements/ListItem/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../../elements/OrderedList/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../../elements/Todolist/types";

export const CustomToolbarButton = ({
  type,
  ...props
}: ToolbarButtonProps & { type?: string }) => {
  const editor = usePlateEditorRef()!;

  return (
    <BlockToolbarButton
      type={getPluginType(editor, type as string)}
      onMouseDown={(e) => {
        e.preventDefault();
        if (
          type === CUSTOM_ELEMENT_BULLETED_LIST ||
          type === CUSTOM_ELEMENT_ORDERED_LIST
        ) {
          deleteBackward(editor, { unit: "character" });
          setNodes(editor, {
            type: CUSTOM_ELEMENT_LIST_ITEM,
          });
          const block = { type: type, children: [] };
          wrapNodes(editor, block);
          // focusEditor(editor);

          return;
        }
        if (type === CUSTOM_ELEMENT_TODO_LIST) {
          setNodes(editor, {
            type: CUSTOM_ELEMENT_TODO_LIST,
            checked: false,
          });
          return;
        }

        toggleNodeType(editor, {
          activeType: type,
        });
      }}
      {...props}
    />
  );
};
