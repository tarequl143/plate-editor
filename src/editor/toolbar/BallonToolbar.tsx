import {
  BlockToolbarButton,
  Button,
  getPluginType,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_CODE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_SUBSCRIPT,
  MARK_SUPERSCRIPT,
  MARK_UNDERLINE,
  usePlateEditorRef,
  usePlateSelection,
} from "@udecode/plate";
import { TextBolder } from "phosphor-react";
import { useEffect } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { isLinkActive, unwrapLink, wrapLink } from "../elements/Link/utils";
import { BaloonToolbar, BaloonToolbarContent } from "./ToolbarStyles";
import { BaloonToolbarProps } from "./types";
import { toggleBallonToolbar } from "./utils";

const BallonToolbar = (props: BaloonToolbarProps) => {
  // Props Destructuring
  const { isLink, toolbarRef } = props;

  // Get Editor Ref
  const editor = usePlateEditorRef()!;
  const selection = usePlateSelection()!;

  // Baloon Toolbar Toggle
  useEffect(() => {
    toggleBallonToolbar(editor, toolbarRef);
  });

  // Console
  // console.log("Editor Baloon", editor);

  return (
    <BaloonToolbar ref={toolbarRef}>
      <BaloonToolbarContent>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<TextBolder size={24} weight="bold" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<TextBolder size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<TextBolder size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<TextBolder size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_HIGHLIGHT)}
          icon={<TextBolder size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_CODE)}
          icon={<TextBolder size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_SUPERSCRIPT)}
          icon={<TextBolder size={24} weight="regular" />}
          clear={getPluginType(editor, MARK_SUBSCRIPT)}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_SUBSCRIPT)}
          icon={<TextBolder size={24} weight="regular" />}
          clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_BLOCKQUOTE)}
          icon={"Quote"}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
          icon={"Hint"}
        />
        <Button
          onMouseDown={(event: any) => {
            if (event.button === 0) {
              if (isLinkActive(editor)) {
                unwrapLink(editor);
                // linkSet("");
              } else {
                if (!editor) return;
                wrapLink(editor, "https://google.com");
              }
            }
          }}
        >
          Link
        </Button>
      </BaloonToolbarContent>
    </BaloonToolbar>
  );
};

export default BallonToolbar;
