import { createTEditor, Plate, withPlate } from "@udecode/plate";
import { useMemo, useRef } from "react";
import { editableProps } from "./editableProps";
import { usePlugins } from "./hooks/usePlugins";
import { EditorMain, EditorWrapper } from "./styles";
import BallonToolbar from "./toolbar/BallonToolbar";

const Editor: React.FC = () => {
  // Use Plugins
  const plugins = usePlugins() as any;

  // Editor
  const editor = useMemo(() => withPlate(createTEditor()), []);

  // Baloon Toolobar Ref
  const ballonToolberRef: any = useRef();

  // Console
  // console.log("Main Editor ==========>");

  return (
    <EditorWrapper>
      <EditorMain id="main-editor">
        <Plate
          // editor={editor}
          enabled
          editableProps={editableProps}
          plugins={plugins as any}
          initialValue={[
            {
              type: "p",
              children: [
                {
                  text: "",
                },
              ],
            },
          ]}
          onChange={(value) => {
            console.log("Value ====>", value);
          }}
        >
          <BallonToolbar toolbarRef={ballonToolberRef} />
        </Plate>
      </EditorMain>
    </EditorWrapper>
  );
};

export default Editor;
