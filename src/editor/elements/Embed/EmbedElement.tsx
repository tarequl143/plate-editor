import {
  findNodePath,
  insertNodes,
  PlateRenderElementProps,
  removeNodes,
  usePlateEditorRef,
} from "@udecode/plate";
import React, { useState } from "react";
import { Path } from "slate";
import { CUSTOM_ELEMENT_EMBED_DATA } from "../EmbedData/types";
import { removeElement } from "../utils";
import {
  CloseButton,
  EmbedWrapper,
  FormHeader,
  UrlForm,
  UrlInput,
  UrlSubmitButton,
} from "./EmbedStyle";

export const getEmbedFormattedUrl = (userInputUrl: string) => {
  let formattedUrl = "";
  const [base, queries] = userInputUrl.split("?");
  const queryObject = new URLSearchParams(queries);

  if (base.includes("youtube.com")) {
    formattedUrl = `https://www.youtube.com/embed/${queryObject.get("v")}`;
  } else if (base.includes("figma.com")) {
    formattedUrl = `https://www.figma.com/embed?node-id=${queryObject
      .get("node-id")
      ?.replace(":", "%3A")}&url=${userInputUrl}&embed_host=iframely`;
  } else {
    formattedUrl = userInputUrl;
  }

  return formattedUrl;
};

const EmbedElement = (props: PlateRenderElementProps) => {
  const { attributes, children, element } = props;
  const editor = usePlateEditorRef()!;

  const [url, setUrl] = useState("");

  const nodePath = findNodePath(editor, props.element)!;

  const handleEmbedUrlInput: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const currentPath = findNodePath(editor, props.element)!;
    // insert embeded node
    insertNodes(
      editor,
      {
        type: CUSTOM_ELEMENT_EMBED_DATA,
        children: [{ text: "" }],
        // set url value to formatted embed url
        url: getEmbedFormattedUrl(url),
      },
      {
        at: Path.next(currentPath),
      },
    );
    // remove embed input node
    removeNodes(editor, {
      at: currentPath,
    });
  };

  return (
    <EmbedWrapper {...attributes} contentEditable={false}>
      {children}
      <FormHeader>
        <div>
          <h2>Embed Design</h2>
          <p>Paste link to embed design from Figma</p>
        </div>
        <CloseButton
          onMouseDown={(e) => {
            removeElement(e as any, editor, element);
          }}
        />
      </FormHeader>
      <UrlForm onSubmit={handleEmbedUrlInput}>
        <UrlInput onChange={(e) => setUrl(e.target.value)} type="url" />
        <UrlSubmitButton disabled={!url.length}>Create</UrlSubmitButton>
      </UrlForm>
    </EmbedWrapper>
  );
};

export default EmbedElement;
