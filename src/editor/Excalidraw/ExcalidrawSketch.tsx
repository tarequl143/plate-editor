import { Excalidraw, exportToBlob, exportToSvg } from "@excalidraw/excalidraw";
import { ExcalidrawElement } from "@excalidraw/excalidraw/types/element/types";
import { ExcalidrawImperativeAPI } from "@excalidraw/excalidraw/types/types";

import { ActionIcon, Button } from "@getonnet/tixio-ui-core";
import { insertNodes, removeNodes, TElement } from "@udecode/plate";
import { useMemo, useRef, useState } from "react";
import { CUSTOM_ELEMENT_SKETCH } from "../elements/Sketch/types";
import {
  ExcalidrawActionBar,
  ExcalidrawModalContent,
  ExcalidrawModalOverlay,
  ExcalidrawModalWrapper,
} from "./ExcalidrawSketchStyles";

import { DownloadSimple, PlusCircle, X } from "phosphor-react";
import { InitialData } from "./InitialData";

export const ExcalidrawSketch = (props: any) => {
  const { currentSketchNode, setSketching, editor } = props;
  console.log("currentSketchNode", currentSketchNode);

  const excalidrawRef = useRef<ExcalidrawImperativeAPI>(null);
  const [sketchElements, setSketchElements] = useState<
    readonly ExcalidrawElement[] | null
  >(null);

  const initSketchData = useMemo(() => {
    if (currentSketchNode) {
      return currentSketchNode[0].sketchData;
    }
    return InitialData;
  }, [currentSketchNode]);

  const updateSketchElements = (sketchSvg: string) => {
    console.log("Returned from here");
    if (!currentSketchNode || !editor) return;
    console.log("Functionshould be run");

    const currentNodeType = currentSketchNode?.[0].type;
    const currentNodePath = currentSketchNode?.[1];
    if (currentNodeType === CUSTOM_ELEMENT_SKETCH) {
      const newProperties = {
        type: CUSTOM_ELEMENT_SKETCH,
        children: [{ text: "" }],
        sketchSvg: sketchSvg,
        sketchData: {
          elements: sketchElements,
          appState: { ...InitialData.appState },
          scrollToContent: true,
        },
      };

      if (sketchElements?.length) {
        removeNodes(editor, { at: currentNodePath, hanging: true });
        insertNodes<TElement>(editor, newProperties, {
          at: currentNodePath,
          select: true,
        });
      }
    }
    setTimeout(() => {
      setSketching(false);
    }, 2000);
    console.log(editor);
  };

  return (
    <ExcalidrawModalWrapper>
      <ExcalidrawModalOverlay
        onClick={() => {
          setSketching(false);
        }}
      ></ExcalidrawModalOverlay>
      <ExcalidrawModalContent>
        <Excalidraw
          ref={excalidrawRef}
          initialData={initSketchData}
          onChange={(elements: readonly ExcalidrawElement[]) => {
            setSketchElements(elements);
          }}
        />
        <ExcalidrawActionBar>
          <Button
            leftIcon={<DownloadSimple size={20} />}
            variant="light"
            onClick={async () => {
              const svg = await exportToBlob({
                elements: excalidrawRef?.current?.getSceneElements() as any,
                mimeType: "image/png",
                appState: {
                  ...InitialData.appState,
                },
                files: excalidrawRef?.current?.getFiles() as any,
              });
              if (!svg) return;
              let url = URL.createObjectURL(svg);
              let download = document.createElement("a");
              download.href = url;
              download.download = "export.png";
              download.click();
              // download.remove();
            }}
          >
            Download
          </Button>
          <Button
            leftIcon={<PlusCircle size={20} />}
            onClick={async () => {
              const svg = await exportToSvg({
                elements: excalidrawRef?.current?.getSceneElements() as any,
                appState: {
                  ...InitialData.appState,
                  // width: 300,
                  // height: 100
                },
                files: excalidrawRef?.current?.getFiles() as any,
              });
              if (currentSketchNode !== undefined) {
                svg.removeAttribute("height");
                svg.removeAttribute("width");
                updateSketchElements(svg.outerHTML);
              }
            }}
          >
            Add to Wiki
          </Button>
          <ActionIcon onClick={() => setSketching(false)}>
            <X size={16} color="#6B7280" />
          </ActionIcon>
        </ExcalidrawActionBar>
      </ExcalidrawModalContent>
    </ExcalidrawModalWrapper>
  );
};
