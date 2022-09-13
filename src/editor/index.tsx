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
import { CUSTOM_ELEMENT_IMAGE } from "./elements/Image/types";
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
    [plugins],
  );
  console.log("editor --------------", editor);

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
    [editor.selection, lastSelection],
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
            initialValue={initialValue}
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

const initialValue = [
  {
    type: "p",
    children: [
      {
        text: "dsfdsafsdafsdaf",
      },
    ],
  },
  {
    type: "p",
    children: [
      {
        text: "dsfdsafsdafsdaf",
      },
    ],
  },
  {
    type: CUSTOM_ELEMENT_IMAGE,
    children: [
      {
        text: "",
      },
    ],
    url: "https://images.unsplash.com/photo-1662667802628-fb15ff430796?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
  {
    type: "custom_elem_h1",
    children: [
      {
        text: "",
      },
    ],
  },
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "custom_elem_H4",
                children: [
                  {
                    text: "row 1",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "custom_elem_H4",
                children: [
                  {
                    text: "row 2",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "tr",
        children: [
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
          {
            type: "td",
            children: [
              {
                type: "p",
                children: [
                  {
                    text: "",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
