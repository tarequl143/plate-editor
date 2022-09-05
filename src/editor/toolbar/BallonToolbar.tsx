import {
  BlockToolbarButton,
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
import { LinkSimple, Quotes, TextBolder, WarningCircle } from "phosphor-react";
import { useEffect, useRef } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { LinkToolbarButton } from "./button/LinkToolbarButton";
import { BaloonToolbar, BaloonToolbarContent } from "./ToolbarStyles";
import { BaloonToolbarProps } from "./types";
import { toggleBallonToolbar } from "./utils";

const BallonToolbar = (props: BaloonToolbarProps) => {
  // Props Destructuring
  const { isLink } = props;

  // Baloon Toolobar Ref
  const ballonToolberRef: any = useRef();

  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  // Get Editor Selection
  const selection = usePlateSelection()!;

  // Baloon Toolbar Toggle
  useEffect(() => {
    toggleBallonToolbar(editor, ballonToolberRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);

  // Console
  // console.log("Editor Baloon", editor);

  return (
    <BaloonToolbar ref={ballonToolberRef}>
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
          icon={<Quotes size={32} weight="fill" />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
          icon={<WarningCircle size={32} weight="fill" />}
        />
        <LinkToolbarButton icon={<LinkSimple size={32} weight="bold" />} />
        {/* <Button
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
        </Button> */}
      </BaloonToolbarContent>
    </BaloonToolbar>
  );
};

export default BallonToolbar;
