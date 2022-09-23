import { getAboveNode, usePlateEditorRef } from "@udecode/plate";
import { PenNib, Trash } from "phosphor-react";
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

  const handleDoubleClick: React.MouseEventHandler<HTMLDivElement> = (
    event,
  ) => {
    if (event.detail > 1) {
      event.preventDefault();
      setSketching(true);
    }
  };

  return (
    <>
      {children}
      <ElementWrapper
        {...attributes}
        className={`sketch-element ${selected && focused ? "selected" : ""}`}
        isSelected={!!(selected && focused)}
        onMouseDown={handleDoubleClick}
      >
        {selected && focused && (
          <SketchElementActions>
            <ActionBtn
              onMouseDown={(event) => {
                removeElement(event, editor, element);
              }}
            >
              <Trash size={18} />
            </ActionBtn>
          </SketchElementActions>
        )}
        {element.sketchSvg && element.sketchData ? (
          <SvgWrapper dangerouslySetInnerHTML={{ __html: element.sketchSvg }} />
        ) : (
          <SketchHelpContent>
            <PenNib size={24} weight="duotone" />
            <SketchContent>Double click to start</SketchContent>
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
