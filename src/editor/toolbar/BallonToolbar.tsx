import {
  BlockToolbarButton,
  ELEMENT_TODO_LI,
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
import {
  CheckSquare,
  Code,
  HighlighterCircle,
  LinkSimple,
  Quotes,
  TextBolder,
  TextHOne,
  TextItalic,
  TextStrikethrough,
  TextUnderline,
  WarningCircle,
} from "phosphor-react";
import { useEffect, useRef } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_H1 } from "../elements/Headings/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { LinkToolbarButton } from "./button/LinkToolbarButton";
import { BalloonToolbarWrap, BaloonToolbarContent } from "./ToolbarStyles";
import { BaloonToolbarProps } from "./types";
import { toggleBallonToolbar } from "./utils";

const BallonToolbar = (props: BaloonToolbarProps) => {
  // Props Destructuring
  const { setIsLink } = props;

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
    <BalloonToolbarWrap ref={ballonToolberRef}>
      <BaloonToolbarContent>
        <MarkToolbarButton
          type={getPluginType(editor, MARK_BOLD)}
          icon={<TextBolder size={24} weight="bold" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<TextItalic size={24} weight="regular" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_UNDERLINE)}
          icon={<TextUnderline size={24} />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_STRIKETHROUGH)}
          icon={<TextStrikethrough size={24} />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_HIGHLIGHT)}
          icon={<HighlighterCircle size={24} />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_CODE)}
          icon={<Code size={24} />}
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
          type={getPluginType(editor, CUSTOM_ELEMENT_H1)}
          icon={<TextHOne size={24} />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_BLOCKQUOTE)}
          icon={<Quotes size={24} weight="fill" />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
          icon={<WarningCircle size={24} weight="fill" />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, ELEMENT_TODO_LI)}
          icon={<CheckSquare size={24} />}
        />
        <LinkToolbarButton
          icon={<LinkSimple size={24} weight="bold" />}
          setIsLink={setIsLink}
        />
      </BaloonToolbarContent>
    </BalloonToolbarWrap>
  );
};

export default BallonToolbar;
