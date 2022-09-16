import {
  BlockToolbarButton,
  deleteBackward,
  getPluginType,
  insertNodes,
  setNodes,
  toggleNodeType,
  usePlateEditorRef,
  wrapNodes,
} from "@udecode/plate";
import { ToolbarButtonProps } from "@udecode/plate-ui-toolbar";
import { Path } from "slate";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../../elements/BulletedList/types";
import { CUSTOM_ELEMENT_EMBED } from "../../elements/Embed/types";
import { CUSTOM_ELEMENT_LIST_ITEM } from "../../elements/ListItem/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../../elements/OrderedList/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../../elements/Todolist/types";
import { createEmptyParagraph } from "../../elements/utils";
import {
  SEPARATOR_AND_SPACER,
  VOID_ELEMENTS,
} from "../../resetNode/resetNodePlugin";
import { getCurrentNodePath } from "../utils";

export const CustomToolbarButton = ({
  type,
  additionalProps,
  ...props
}: ToolbarButtonProps & { type?: string; additionalProps?: any }) => {
  const editor = usePlateEditorRef()!;

  return (
    <BlockToolbarButton
      type={getPluginType(editor, type as string)}
      onMouseDown={(e) => {
        e.preventDefault();
        const currentNodePath = getCurrentNodePath(editor) || [];
        // bullet list or rendered list click behaviour
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
        // -todolist behaviour
        if (type === CUSTOM_ELEMENT_TODO_LIST) {
          setNodes(editor, {
            type: CUSTOM_ELEMENT_TODO_LIST,
            checked: false,
          });
          return;
        }

        // void element behaviour
        if (SEPARATOR_AND_SPACER.includes(type!)) {
          // insert the node
          toggleNodeType(editor, {
            activeType: type,
          });
          // insert an empty paragraph below it
          insertNodes(editor, createEmptyParagraph());
          return;
        }

        if (type === CUSTOM_ELEMENT_EMBED) {
          setNodes(editor, {
            type: CUSTOM_ELEMENT_EMBED,
            children: [{ text: "" }],
            additionalProps,
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
