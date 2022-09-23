import {
  createPlateEditor,
  getSelectionText,
  MentionCombobox,
  Plate,
  Value,
} from "@udecode/plate";
import { useCallback, useMemo, useState } from "react";
import { Path, Text } from "slate";
import { defaultValue } from "./defaultEditorvalue";
import { editableProps } from "./editableProps";
import { MENTIONABLES } from "./elements/Mention/Mentionable";
import { MentionItem } from "./elements/Mention/MentionElement";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "./elements/Mention/types";
import { usePlugins } from "./hooks/usePlugins";
import { EditorMain, EditorWrapper, PageWrapper } from "./styles";
import BallonToolbar from "./toolbar/BallonToolbar";
import SlashToolbar from "./toolbar/SlashToolbar";

const EditorIndex: React.FC = () => {
  const [lastSelection, setLastSelection] = useState<string>("");
  const [isLink, setIsLink] = useState(false);

  // hook returns all Plugins
  const plugins = usePlugins();

  // Editor object
  const editor = useMemo(
    () => createPlateEditor({ plugins: plugins }),
    [plugins]
  );

  // On Editor Change
  const onChange = (value: Value) => {
    if (isLink) {
      setIsLink(false);
    }
    // console.log("Value ====>", value);

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
    [editor.selection, lastSelection]
  );

  // Console
  // console.log("Main Editor ==========>");

  return (
    <PageWrapper>
      <EditorWrapper>
        <EditorMain id="main-editor">
          <Plate
            editor={editor}
            enabled
            editableProps={{ ...editableProps, decorate: decorate as any }}
            plugins={plugins}
            initialValue={defaultValue}
            onChange={onChange}
          >
            <SlashToolbar />
            <BallonToolbar setIsLink={setIsLink} />
            <MentionCombobox
              items={MENTIONABLES}
              pluginKey={CUSTOM_ELEMENT_MENTION_ITEM}
              onRenderItem={MentionItem}
            />
          </Plate>
        </EditorMain>
      </EditorWrapper>
    </PageWrapper>
  );
};

export default EditorIndex;
