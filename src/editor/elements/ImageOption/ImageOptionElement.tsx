import { Text } from "@getonnet/tixio-ui-core";
import {
  ELEMENT_PARAGRAPH,
  findNodePath,
  focusEditor,
  getNode,
  insertNodes,
  PlateRenderElementProps,
  removeNodes,
  usePlateEditorRef,
} from "@udecode/plate";
import { DotsThreeOutline, ImageSquare } from "phosphor-react";
import { useState } from "react";
import { Path } from "slate";
import { useFocused, useSelected } from "slate-react";
import { CUSTOM_ELEMENT_IMAGE } from "../Image/types";
import {
  ContentWrapper,
  ImageWrapper,
  LeftContentWrapper,
} from "./ImageOptionStyle";
import ImageOptionModal from "./modal/ImageOptionModal";

const ImageOptionElement = (props: PlateRenderElementProps) => {
  const [showAddImageModal, setshowAddImageModal] = useState(false);
  // Get Editor Ref
  const editor = usePlateEditorRef()!;
  const focused = useFocused();
  const selected = useSelected();

  const insertImageNode = (url: string) => {
    if (!editor) return;
    const currentPath = findNodePath(editor, props.element);
    const nextChild = getNode(editor, Path.next(currentPath!));

    removeNodes(editor, { at: currentPath });
    insertNodes(
      editor,
      [
        {
          type: CUSTOM_ELEMENT_IMAGE,
          children: [],
          url: url,
        },
      ],
      { at: currentPath }
    );
    //* if there is not child after the image element
    //* insert an empty paragraph after the image
    if (nextChild === null) {
      insertNodes(
        editor,

        {
          type: ELEMENT_PARAGRAPH,
          children: [],
        },
        { at: Path.next(currentPath!), hanging: true }
      );
      focusEditor(editor, Path.next(currentPath!));
    }
  };

  return (
    <ImageWrapper
      {...props.attributes}
      contentEditable={false}
      focused={focused && selected}
      className={`image-option-element ${
        selected && focused ? "selected" : ""
      }`}
    >
      {props.children}
      <ContentWrapper>
        <LeftContentWrapper>
          <ImageSquare size={32} />
          <Text color="#374151">Add Image</Text>
        </LeftContentWrapper>
        <DotsThreeOutline
          size={24}
          color="#6B7280"
          cursor="pointer"
          onClick={() => setshowAddImageModal(true)}
        />
      </ContentWrapper>
      {/* image option modal */}
      <ImageOptionModal
        opened={showAddImageModal}
        onCLose={() => setshowAddImageModal(false)}
        insertImage={insertImageNode}
      />
    </ImageWrapper>
  );
};

export default ImageOptionElement;
