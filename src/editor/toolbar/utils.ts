import { PlateEditor, Value } from "@udecode/plate";
import { RefObject } from "react";
import { BaseEditor, Editor, Range } from "slate";
import { ReactEditor } from "slate-react";

export const calculateToolbarLeft = (
  domSelectionBoundingClient: DOMRect,
  elem: HTMLDivElement,
  editorBoundingClient: DOMRect,
) => {
  let left = 0;
  const toolbarHalfWidth = elem.offsetWidth / 2;
  const getLeft =
    domSelectionBoundingClient.left +
    domSelectionBoundingClient.width / 2 -
    (editorBoundingClient.left + toolbarHalfWidth);

  if (getLeft + toolbarHalfWidth * 2 > editorBoundingClient.width) {
    left = editorBoundingClient.width - toolbarHalfWidth * 2;
    return left;
  }
  if (getLeft < 0) {
    left = 0;
    return left;
  }
  left = getLeft;
  return left;
};
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

export const toggleBallonToolbar = (
  editor?: PlateEditor<Value>,
  toolbarRef?: RefObject<HTMLDivElement>,
) => {
  if (!editor) {
    return;
  }
  const elem = toolbarRef?.current;
  const { selection } = editor;

  if (!elem) {
    return;
  }

  const EditorId = document.getElementById("main-editor")!;
  const EditorBoundingClient: any = EditorId.getBoundingClientRect();

  if (
    !selection ||
    !ReactEditor.isFocused(editor as ReactEditor) ||
    Range.isCollapsed(selection) ||
    Editor.string(editor as BaseEditor, selection) === ""
  ) {
    elem.removeAttribute("style");
    return;
  }

  const domSelection: any = window?.getSelection();
  const { rangeCount } = domSelection;
  if (!rangeCount) return;
  const rect =
    !!rangeCount && domSelection?.getRangeAt?.(0)?.getBoundingClientRect();
  const toolbarLeft = calculateToolbarLeft(rect, elem, EditorBoundingClient);
  const toolbarTop = calculateToolbarTop(rect, elem, EditorBoundingClient);

  //   setIsOpenLinkForm(false);
  //   setShowCommentInput(false);
  //   setLink("");

  // Set Toolbar Style
  elem.style.opacity = "1";
  elem.style.left = `${toolbarLeft}px`;
  elem.style.top = `${toolbarTop}px`;
};
