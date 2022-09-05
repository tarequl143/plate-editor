import {
  createPlateEditor,
  MentionCombobox,
  Plate,
  RenderLeafFn,
  TEditableProps,
  Value,
} from "@udecode/plate";
import { useEffect, useMemo, useState } from "react";
import { BaseEditor, BaseRange, Editor, Path, Range, Text } from "slate";
import { MENTIONABLES } from "./elements/Mention/Mentionable";
import { MentionItem } from "./elements/Mention/MentionElement";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "./elements/Mention/types";
import { usePlugins } from "./hooks/usePlugins";
import { LeafRenderer } from "./renderer/LeafRenderer";
import { EditorMain, EditorWrapper } from "./styles";
import BallonToolbar from "./toolbar/BallonToolbar";

const EditorIndex: React.FC = () => {
  const [lastSelection, setLastSelection] = useState<BaseRange | null>(null);

  // Use Plugins
  const plugins = usePlugins();

  // Editor
  const editor = useMemo(
    () => createPlateEditor({ plugins: plugins }),
    [plugins],
  );

  const onChange = (value: Value) => {
    console.log("Value ====>", value);
  };

  useEffect(() => {
    if (!editor) return;
    if (editor.selection != null) {
      setLastSelection(editor.selection);
    }
  }, [editor, editor.selection]);

  const decorate = ([node, path]: [node: Node, path: Path]) => {
    if (
      Text.isText(node) &&
      editor.selection == null &&
      lastSelection !== null
    ) {
      const intersection = Range.intersection(
        lastSelection,
        Editor.range(editor as BaseEditor, path),
      );

      if (intersection === null) {
        return [] as any;
      }

      return [
        {
          highlighted: true,
          ...intersection,
        },
      ] as any;
    }

    return [] as any;
  };

  const editableProps: TEditableProps = {
    spellCheck: false,
    autoFocus: false,
    readOnly: false,
    // decorate: decorate,
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
