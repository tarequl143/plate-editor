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
import {
  Code,
  HighlighterCircle,
  LinkSimple,
  Quotes,
  TextBolder,
  TextHFour,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
  TextUnderline,
  WarningCircle,
} from "phosphor-react";
import { useEffect, useRef } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import {
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
  CUSTOM_ELEMENT_H4,
} from "../elements/Headings/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { LinkToolbarButton } from "./button/LinkToolbarButton";
import { BalloonToolbarWrap, BaloonToolbarContent } from "./ToolbarStyles";
import { BaloonToolbarProps } from "./types";
import { toggleBallonToolbar } from "./utils";

const BallonToolbar = (props: BaloonToolbarProps) => {
  // Props Destructuring
  const { setIsLink } = props;

  // Baloon Toolobar Ref
  const ballonToolberRef = useRef() as React.RefObject<HTMLDivElement>;

  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  // Get Editor Selection
  const selection = usePlateSelection()!;

  // Baloon Toolbar Toggle
  useEffect(() => {
    if (!!editor) {
      toggleBallonToolbar(editor, ballonToolberRef);
    }
  }, [selection, editor]);

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
        {/* heading buttons */}
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_H1)}
          icon={<TextHOne size={32} />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_H2)}
          icon={<TextHTwo size={32} />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_H3)}
          icon={<TextHThree size={32} />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_H4)}
          icon={<TextHFour size={32} />}
        />
        {/* heading buttons ends*/}
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_BLOCKQUOTE)}
          icon={<Quotes size={32} weight="fill" />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
          icon={<WarningCircle size={32} weight="fill" />}
        />
        <LinkToolbarButton
          icon={<LinkSimple size={32} weight="bold" />}
          setIsLink={setIsLink}
        />
      </BaloonToolbarContent>
    </BalloonToolbarWrap>
  );
};

export default BallonToolbar;
