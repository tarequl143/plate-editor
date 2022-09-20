import { Button } from "@getonnet/tixio-ui-core";
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
  const [url, setUrl] = useState("");

  const { type } = (element as any).additionalProps;
  const editor = usePlateEditorRef()!;

  const handleEmbedUrlInput: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const currentPath = findNodePath(editor, element)!;
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
      }
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
          <h2>Embed {type === "design" ? "Design" : "Video"}</h2>
          <p>
            Embed{" "}
            {type === "design"
              ? "Paste link to embed design from Figma"
              : "Paste link to embed design from Youtube"}
          </p>
        </div>
        <CloseButton
          onMouseDown={(e) => {
            removeElement(e as any, editor, element);
          }}
        />
      </FormHeader>
      <UrlForm onSubmit={handleEmbedUrlInput}>
        <UrlInput
          onChange={(e) => setUrl(e.target.value)}
          type="url"
          placeholder={
            type === "design"
              ? "https://www.figma.com/file/..."
              : "https://www.youtube.com/watch?v..."
          }
        />
        <Button
          size="md"
          ml="auto"
          mt={24}
          sx={{
            display: "block",
          }}
        >
          Create
        </Button>
      </UrlForm>
    </EmbedWrapper>
  );
};

export default EmbedElement;
