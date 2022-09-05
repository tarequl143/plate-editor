import { isUrl } from "@udecode/plate";

import { wrapLink } from "./utils";

export const withLink = (editor: any) => {
  const { insertData, insertText } = editor;

  editor.insertText = (text: any) => {
    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data: any) => {
    const text = data.getData("text/plain");

    if (text && isUrl(text)) {
      wrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};
