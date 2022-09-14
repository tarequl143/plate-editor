import {
  getAboveNode,
  getEditorString,
  getPlateEditorRef,
  getPoint,
  getRangeBefore,
  PlateEditor,
  TEditor,
  Value,
} from "@udecode/plate";
import { Dispatch, RefObject, SetStateAction } from "react";
import { BaseEditor, BaseRange, Editor, Range } from "slate";
import { ReactEditor } from "slate-react";

// Special Character
const specialChar = [
  " ",
  "@",
  "!",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "{",
  "}",
  "[",
  "]",
  ",",
  ".",
  "?",
  "~",
  "<",
  ">",
];

// Calculate Baloon Toolbar Left Position
export const calculateToolbarLeft = (
  domSelectionBoundingClient: DOMRect,
  elem: HTMLDivElement,
  editorBoundingClient: DOMRect,
) => {
  let left = 0;
  const toolbarHalfWidth = elem.offsetWidth / 2;
  const getLeft =
    domSelectionBoundingClient?.left +
    domSelectionBoundingClient?.width / 2 -
    (editorBoundingClient?.left + toolbarHalfWidth);

  if (getLeft + toolbarHalfWidth * 2 > editorBoundingClient?.width) {
    left = editorBoundingClient?.width - toolbarHalfWidth * 2;
    return left;
  }
  if (getLeft < 0) {
    left = 0;
    return left;
  }
  left = getLeft;
  return left;
};

// Calculate Baloon Toolbar Top Position
export const calculateToolbarTop = (
  domSelectionBoundingClient: DOMRect,
  elem: HTMLDivElement,
  editorBoundingClient: DOMRect,
) => {
  let top = 0;
  const toolbarHeight = elem.offsetHeight;

  if (editorBoundingClient.top < 0) {
    top =
      domSelectionBoundingClient.top +
      Math.abs(editorBoundingClient.top) -
      toolbarHeight -
      12;
  } else {
    top =
      domSelectionBoundingClient.top -
      Math.abs(editorBoundingClient.top) -
      toolbarHeight -
      12;
  }
  return top;
};

// Toggle Baloon Toolbar
export const toggleBallonToolbar = (
  editor?: PlateEditor<Value>,
  toolbarRef?: RefObject<HTMLDivElement>,
) => {
  if (!editor) {
    return;
  }

  // toolbar element
  const elem = toolbarRef?.current;
  if (!elem) {
    return;
  }

  const { selection } = editor; //get selection
  const EditorId = document.getElementById("main-editor")!;
  const EditorBoundingClient: any = EditorId.getBoundingClientRect();

  //* hide toolbar logic
  if (
    !selection ||
    !ReactEditor.isFocused(editor as ReactEditor) ||
    Range.isCollapsed(selection) ||
    Editor.string(editor as BaseEditor, selection) === ""
  ) {
    elem.removeAttribute("style");
    return;
  }

  //! return of dom selection range is false/empty
  const domSelection: any = window?.getSelection();
  const { rangeCount } = domSelection;
  if (!rangeCount) return;

  const rect =
    !!rangeCount && domSelection?.getRangeAt?.(0)?.getBoundingClientRect();
  const toolbarLeft = calculateToolbarLeft(rect, elem, EditorBoundingClient);
  const toolbarTop = calculateToolbarTop(rect, elem, EditorBoundingClient);

  // Set Toolbar Style
  elem.style.opacity = "1";
  elem.style.left = `${toolbarLeft}px`;
  elem.style.top = `${toolbarTop}px`;
};

export const toggleSlashToolbar = (
  editor: PlateEditor<Value>,
  toolbarRef: RefObject<HTMLDivElement>,
  toolbarTarget: BaseRange,
) => {
  if (toolbarTarget) {
    const EditorId: any = document.getElementById("main-editor");
    const EditorBoundingClient: any = EditorId?.getBoundingClientRect();

    const el: any = toolbarRef.current;

    if (!editor) return;
    const domRange = ReactEditor.toDOMRange(
      editor as unknown as ReactEditor,
      toolbarTarget,
    );
    const rect = domRange.getBoundingClientRect();
    let ToolbarTop = 0;

    // Define Toolbar Top Position
    if (EditorBoundingClient?.top < 0) {
      ToolbarTop =
        rect.top + Math.abs(EditorBoundingClient?.top) + rect.height + 5;
    } else {
      ToolbarTop =
        rect.top - Math.abs(EditorBoundingClient?.top) + rect.height + 5;
    }

    el.style.opacity = "1";
    el.style.top = `${ToolbarTop}px`;
    el.style.left = `${calculateToolbarLeft(rect, el, EditorBoundingClient)}px`;
  } else {
    const el: any = toolbarRef.current;
    el.removeAttribute("style");
  }
};

// Initial Slash Toolbar Target And Search Term
export const slashToolbarInitial = (
  setSlashToolbarTarget: Dispatch<SetStateAction<any>>,
  setSearchTerm: Dispatch<SetStateAction<string>>,
) => {
  const editor = getPlateEditorRef() as TEditor<Value>;

  const { selection } = editor;

  if (selection && Range.isCollapsed(selection)) {
    const start = getPoint(editor, selection);
    let beforeCharacter = "";
    let target = { anchor: start, focus: start };

    if (start.offset === 1) {
      target = { anchor: { ...start, offset: 0 }, focus: start };
    } else if (start.offset > 1) {
      target = {
        anchor: { ...start, offset: start.offset - 2 },
        focus: start,
      };
    }

    beforeCharacter = getEditorString(editor, target);
    const beforeRange = getRangeBefore(editor, start, { unit: "word" });
    const beforeRangeDis =
      beforeRange && getRangeBefore(editor, beforeRange, { distance: 2 });
    const beforeWord = getEditorString(
      editor,
      start.offset === 0 ? beforeRange : beforeRangeDis,
    );
    const lastCharOfBeforeWord = beforeWord.slice(-1);
    if (
      beforeCharacter === "/" ||
      beforeCharacter === " /" ||
      (beforeWord?.startsWith("/") &&
        !beforeWord?.endsWith("/") &&
        !beforeWord?.startsWith("//") &&
        !specialChar.includes(lastCharOfBeforeWord)) ||
      (beforeWord?.startsWith(" /") &&
        !beforeWord?.startsWith("/ ") &&
        !beforeWord?.endsWith("/") &&
        !specialChar.includes(lastCharOfBeforeWord))
    ) {
      setSlashToolbarTarget(target);
      setSearchTerm(beforeWord.replace("/", "").trim());
      return;
    }
    setSlashToolbarTarget(null);
    setSearchTerm("");
  }
};

export const getCurrentNodeType = (editor: TEditor<Value>) => {
  return getAboveNode(editor)?.[0]?.type;
};

export const getCurrentNodePath = (editor: TEditor<Value>) => {
  return getAboveNode(editor)?.[1];
};

export const getCurrentNodeLastChildrenLastText = (editor: TEditor<Value>) => {
  const currentNode = getAboveNode(editor);
  console.log(currentNode);

  const nodeChildren = currentNode?.[0]?.children;
  const lastChildrenText = nodeChildren?.[nodeChildren.length - 1].text;
  return lastChildrenText as string;
};
