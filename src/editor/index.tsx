import {
  createPlateEditor,
  getSelectionText,
  MentionCombobox,
  Plate,
  Value,
} from "@udecode/plate";
import { useCallback, useMemo, useState } from "react";
import { Path, Text } from "slate";
import { editableProps } from "./editableProps";
import { MENTIONABLES } from "./elements/Mention/Mentionable";
import { MentionItem } from "./elements/Mention/MentionElement";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "./elements/Mention/types";
import { usePlugins } from "./hooks/usePlugins";
import { EditorMain, EditorWrapper } from "./styles";
import BallonToolbar from "./toolbar/BallonToolbar";

const EditorIndex: React.FC = () => {
  const [lastSelection, setLastSelection] = useState<string>("");
  const [isLink, setIsLink] = useState(false);

  console.log(isLink);

  // Use Plugins
  const plugins = usePlugins();

  // Editor
  const editor = useMemo(
    () => createPlateEditor({ plugins: plugins }),
    [plugins],
  );

  // On Editor Change
  const onChange = (value: Value) => {
    console.log("Value ====>", value);

    if (!editor) return;

    // set last selection if not null
    if (editor.selection !== null) {
      setLastSelection(getSelectionText(editor));
    }
  };

  // Decorate selected text when link button clicked
  const decorate = useCallback(
    ([node, path]: [node: Node, path: Path]) => {
      const ranges: any = [];

      if (Text.isText(node) && lastSelection && isLink) {
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
    [editor.selection, lastSelection],
  );

  // Console
  // console.log("Main Editor ==========>");

  return (
    <EditorWrapper>
      <EditorMain id="main-editor">
        <Plate
          editor={editor}
          enabled
          editableProps={{ ...editableProps, decorate: decorate as any }}
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
          <BallonToolbar setIsLink={setIsLink} />
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
