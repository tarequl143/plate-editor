import {
  findNodePath,
  focusEditor,
  insertNodes,
  PlateRenderElementProps,
  removeNodes,
  usePlateEditorRef,
} from "@udecode/plate";
import { useState } from "react";
import { Path } from "slate";
import { CUSTOM_ELEMENT_H1 } from "../Headings/types";
import { CUSTOM_ELEMENT_IMAGE } from "../Image/types";
import { ImageLinkInput, ImageWrapper } from "./ImageOptionStyle";

const ImageOptionElement = (props: PlateRenderElementProps) => {
  // image url input state
  const [url, setUrl] = useState("");
  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  const addImageElement: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const parentNodepath = findNodePath(editor, props.element)!;

    removeNodes(editor, { at: parentNodepath, hanging: false });
    insertNodes(
      editor,
      [
        {
          type: CUSTOM_ELEMENT_IMAGE,
          children: [],
          url: url,
        },
        // insert a empty node below image
        {
          type: CUSTOM_ELEMENT_H1,
          children: [],
        },
      ],
      { at: parentNodepath },
    );

    focusEditor(editor, Path.next(parentNodepath));
  };

  return (
    <ImageWrapper onSubmit={addImageElement} contentEditable={false}>
      {props.children}
      <ImageLinkInput
        placeholder="Image url"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">upload</button>
    </ImageWrapper>
  );
};

export default ImageOptionElement;
