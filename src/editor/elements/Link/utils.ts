import {
  collapseSelection,
  insertNodes,
  unwrapNodes,
  wrapNodes,
} from "@udecode/plate";
import { Editor, Range } from "slate";
import { CUSTOM_ELEMENT_LINK } from "./types";

export const isLinkActive = (editor: any) => {
  const [link]: any = Editor.nodes(editor, {
    match: (n: any) => n.type === CUSTOM_ELEMENT_LINK,
  });

  return !!link;
};

// Remove Link if Link is Active
export const unwrapLink = (editor: any) => {
  unwrapNodes(editor, {
    match: (n: any) => n.type === CUSTOM_ELEMENT_LINK,
  });
};

export const wrapLink = (editor: any, url: any) => {
  if (isLinkActive(editor)) {
    unwrapLink(editor);
  }

  const { selection } = editor;
  const isCollapsedSelection = selection && Range.isCollapsed(selection);
  const link = {
    type: CUSTOM_ELEMENT_LINK,
    url,
    children: isCollapsedSelection ? [{ text: url }] : [],
  };

  if (isCollapsedSelection) {
    insertNodes(editor, link);
  } else {
    wrapNodes(editor, link, { split: true });
    collapseSelection(editor, { edge: "end" });
  }
};

// Insert Link
export const insertLink = (editor: any, url: string) => {
  if (editor.selection) {
    wrapLink(editor, url);
  }
};
