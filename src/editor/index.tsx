import {
  createPlateEditor,
  getSelectionText,
  MentionCombobox,
  Plate,
  RenderLeafFn,
  TEditableProps,
  Value,
} from "@udecode/plate";
import { useCallback, useMemo, useState } from "react";
import { Path, Text } from "slate";
import { MENTIONABLES } from "./elements/Mention/Mentionable";
import { MentionItem } from "./elements/Mention/MentionElement";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "./elements/Mention/types";
import { usePlugins } from "./hooks/usePlugins";
import { LeafRenderer } from "./renderer/LeafRenderer";
import { EditorMain, EditorWrapper } from "./styles";
import BallonToolbar from "./toolbar/BallonToolbar";

const EditorIndex: React.FC = () => {
  const [lastSelection, setLastSelection] = useState<string>("");

  // Use Plugins
  const plugins = usePlugins();

  // Editor
  const editor = useMemo(
    () => createPlateEditor({ plugins: plugins }),
    [plugins],
  );

  const onChange = (value: Value) => {
    console.log("Value ====>", value);

    if (!editor) return;

    const { selection } = editor;

    // set last selection if not null
    if (editor.selection !== null) {
      setLastSelection(getSelectionText(editor));
    }
  };

  const decorate = useCallback(
    ([node, path]: [node: Node, path: Path]) => {
      const ranges: any = [];

      if (Text.isText(node) && lastSelection) {
        const { text } = node;
        const parts = text.split(lastSelection);
        let offset = 0;

        parts.forEach((part, i) => {
          if (i !== 0) {
            ranges.push({
              anchor: { path, offset: offset - lastSelection.length },
              focus: { path, offset },
              highlight: true,
            });
          }

          offset = offset + part.length + lastSelection.length;
        });
      }

      return ranges;
    },
    [lastSelection],
  );

  const editableProps: TEditableProps = {
    spellCheck: false,
    autoFocus: false,
    readOnly: false,
    decorate: decorate as any,
    placeholder: "Click here to start writing..",
    renderLeaf: LeafRenderer as RenderLeafFn<Value>,
  };

  // Console
  // console.log("Main Editor ==========>");

  return (
    <EditorWrapper>
      <EditorMain id="main-editor">
        <Plate
          editor={editor}
          enabled
          editableProps={editableProps}
          plugins={plugins}
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
          onChange={onChange}
        >
          <BallonToolbar />
          <MentionCombobox
            items={MENTIONABLES}
            pluginKey={CUSTOM_ELEMENT_MENTION_ITEM}
            onRenderItem={MentionItem}
          />
        </Plate>
      </EditorMain>
    </EditorWrapper>
  );
};

export default EditorIndex;
