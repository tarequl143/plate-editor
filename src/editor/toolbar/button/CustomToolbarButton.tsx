import {
  BlockToolbarButton,
  BlockToolbarButtonProps,
  deleteBackward,
  getAboveNode,
  getPluginType,
  insertNodes,
  setNodes,
  toggleNodeType,
  usePlateEditorRef,
  wrapNodes,
} from "@udecode/plate";
import { Path } from "slate";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../../elements/BulletedList/types";
import { CUSTOM_ELEMENT_EMBED } from "../../elements/Embed/types";
import { CUSTOM_ELEMENT_LIST_ITEM } from "../../elements/ListItem/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../../elements/OrderedList/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../../elements/Todolist/types";
import { createEmptyParagraph } from "../../elements/utils";
import { SEPARATOR_AND_SPACER } from "../../resetNode/resetNodePlugin";
import { getCurrentNodeLastChildrenLastText } from "../utils";

export const CustomToolbarButton = ({
  type,
  additionalProps,
  ...props
}: BlockToolbarButtonProps & { type?: string; additionalProps?: any }) => {
  const editor = usePlateEditorRef()!;

  return (
    <BlockToolbarButton
      as={"div"}
      type={getPluginType(editor, type as string)}
      onMouseDown={(e) => {
        e.preventDefault();
        if (e.button === 0) {
          deleteBackward(editor, { unit: "character" });
          const currentNode = getAboveNode(editor)!;
          const lastChildrenText =
            getCurrentNodeLastChildrenLastText(currentNode);

          console.log("currentNode last text", currentNode);

          // bullet list or rendered list click behaviour
          if (
            type === CUSTOM_ELEMENT_BULLETED_LIST ||
            type === CUSTOM_ELEMENT_ORDERED_LIST
          ) {
            setNodes(editor, {
              type: CUSTOM_ELEMENT_LIST_ITEM,
            });
            const block = { type: type, children: [] };
            wrapNodes(editor, block);
            return;
          }
          // Todolist behaviour
          if (type === CUSTOM_ELEMENT_TODO_LIST) {
            setNodes(editor, {
              type: CUSTOM_ELEMENT_TODO_LIST,
              checked: false,
            });
            return;
          }

          if (type === CUSTOM_ELEMENT_EMBED && lastChildrenText === "") {
            setNodes(editor, {
              type: CUSTOM_ELEMENT_EMBED,
              children: [{ text: "" }],
              additionalProps,
            });
            return;
          }

          if (type === CUSTOM_ELEMENT_EMBED && lastChildrenText !== "") {
            insertNodes(
              editor,
              {
                type: CUSTOM_ELEMENT_EMBED,
                children: [{ text: "" }],
                additionalProps,
              },
              {
                at: Path.next(currentNode?.[1]),
                select: true,
              },
            );
            return;
          }

          toggleNodeType(editor, {
            activeType: type,
          });
          // void element behaviour
          if (SEPARATOR_AND_SPACER.includes(type!)) {
            // insert an empty paragraph below it
            insertNodes(editor, createEmptyParagraph());
            return;
          }
        }
      }}
      {...props}
    />
  );
};
