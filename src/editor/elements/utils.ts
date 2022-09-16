import {
  ELEMENT_PARAGRAPH,
  findNodePath,
  insertNodes,
  removeNodes,
  TEditor,
  TElement,
  TReactEditor,
  Value,
} from "@udecode/plate";

// returns a paragraph
export const createEmptyParagraph = () => ({
  type: ELEMENT_PARAGRAPH,
  children: [{ text: "" }],
});

export const removeElement = (
  event: React.MouseEvent<HTMLElement, MouseEvent>,
  editor: TEditor<Value>,
  element: TElement,
) => {
  if (!editor) return;
  const path = findNodePath(editor as TReactEditor<Value>, element);

  if (event.button === 0) {
    removeNodes(editor, { at: path, hanging: true });
    if (editor.children?.length < 1) {
      insertNodes<TElement>(
        editor,
        {
          type: ELEMENT_PARAGRAPH,
          children: [{ text: "" }],
        },
        {
          at: [0],
          select: true,
        },
      );
    }
  }
};
