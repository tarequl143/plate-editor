import { getAboveNode, usePlateEditorRef } from "@udecode/plate";
import { useState } from "react";
import { useFocused, useSelected } from "slate-react";
import { ExcalidrawSketch } from "../../Excalidraw/ExcalidrawSketch";

import { removeElement } from "../utils";
import {
  ActionBtn,
  ElementWrapper,
  SketchContent,
  SketchElementActions,
  SketchHelpContent,
  SvgWrapper,
} from "./SketchStyle";

const SketchElement = (props: any) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  const [sketching, setSketching] = useState(false);

  const currentNode = getAboveNode(editor);

  return (
    <>
      {children}
      <ElementWrapper
        {...attributes}
        className={`sketch-element ${selected && focused ? "selected" : ""}`}
        isSelected={!!(selected && focused)}
        onDoubleClick={() => setSketching(true)}
      >
        {selected && focused && (
          <SketchElementActions>
            <ActionBtn>?</ActionBtn>
            <ActionBtn
              onMouseDown={(event) => {
                removeElement(event, editor, element);
              }}
            >
              Del
            </ActionBtn>
          </SketchElementActions>
        )}
        {element.sketchSvg && element.sketchData ? (
          <SvgWrapper dangerouslySetInnerHTML={{ __html: element.sketchSvg }} />
        ) : (
          <SketchHelpContent>
            ?<SketchContent>Double click to start</SketchContent>
            <SketchContent>sketching out your thoughts</SketchContent>
          </SketchHelpContent>
        )}
      </ElementWrapper>
      {sketching && (
        <ExcalidrawSketch
          currentSketchNode={currentNode}
          setSketching={setSketching}
          editor={editor}
        />
      )}
    </>
  );
};

export default SketchElement;
