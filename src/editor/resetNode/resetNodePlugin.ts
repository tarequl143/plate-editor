import {
  ELEMENT_PARAGRAPH,
  insertNodes,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  PlatePlugin,
  ResetNodePlugin,
  unsetNodes,
  unwrapNodes,
} from "@udecode/plate";
import { Path } from "slate";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../elements/BulletedList/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { CUSTOM_ELEMENT_LIST_ITEM } from "../elements/ListItem/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../elements/OrderedList/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../elements/Todolist/types";
import { getCurrentNodePath, getCurrentNodeType } from "../toolbar/utils";

const LIST_TYPES = [CUSTOM_ELEMENT_ORDERED_LIST, CUSTOM_ELEMENT_BULLETED_LIST];
const LIST_ITEMS = [CUSTOM_ELEMENT_LIST_ITEM, CUSTOM_ELEMENT_TODO_LIST];
const SOFT_BREAK_ELEMENTS = [
  CUSTOM_ELEMENT_HINT,
  CUSTOM_ELEMENT_CODE_BLOCK,
  CUSTOM_ELEMENT_BLOCKQUOTE,
];

const resetBlockTypesCommonRule = {
  types: [
    CUSTOM_ELEMENT_BLOCKQUOTE,
    CUSTOM_ELEMENT_BULLETED_LIST,
    CUSTOM_ELEMENT_LIST_ITEM,
    CUSTOM_ELEMENT_ORDERED_LIST,
    CUSTOM_ELEMENT_TODO_LIST,
    CUSTOM_ELEMENT_HINT,
  ],
  defaultType: ELEMENT_PARAGRAPH,
};

export const resetNodePlugin: Partial<PlatePlugin<ResetNodePlugin>> = {
  options: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Enter",
        predicate: isBlockAboveEmpty,
        onReset(editor) {
          const nodeType = getCurrentNodeType(editor) as string;
          const nodePath = getCurrentNodePath(editor);
          if (nodeType === CUSTOM_ELEMENT_TODO_LIST) {
            insertNodes(
              editor,
              {
                type: CUSTOM_ELEMENT_TODO_LIST,
                children: [{ text: "" }],
                checked: false,
              },
              {
                at: Path.next(nodePath as Path),
                select: true,
              },
            );
          }
        },
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Backspace",
        predicate: isSelectionAtBlockStart,
        onReset(editor) {
          unwrapNodes(editor, {
            match: (n: any) => LIST_TYPES.includes(n.type),
            split: true,
          });
          unsetNodes(editor, ["checked", "id"], {
            match: (n: any) => n.type === CUSTOM_ELEMENT_TODO_LIST,
          });
        },
      },
    ],
  },
};
