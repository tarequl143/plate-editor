import { insertNodes, TElement } from "@udecode/plate";
import { Path } from "slate";
import { CUSTOM_ELEMENT_TODO_LIST } from "../elements/Todolist/types";
import { getCurrentNodePath, getCurrentNodeType } from "../toolbar/utils";

export const CustomAutoFormatRules = (editor: any, event: any) => {
  const nodeType = getCurrentNodeType(editor);
  const nodePath = getCurrentNodePath(editor);

  console.log("Event", event);

  switch (event.key.toLowerCase()) {
    case "enter": {
      if (!editor) return;
      if (nodeType === CUSTOM_ELEMENT_TODO_LIST) {
        insertNodes<TElement>(
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
        event.preventDefault();
      }

      break;
    }

    case "delete":
    case "backspace": {
      if (!editor) return;

      break;
    }
    default:
      break;
  }
};
