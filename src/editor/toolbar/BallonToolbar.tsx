import {
  getPluginType,
  MarkToolbarButton,
  MARK_BOLD,
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
  Image,
  LinkSimple,
  ListBullets,
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
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../elements/BulletedList/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import {
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
  CUSTOM_ELEMENT_H4,
} from "../elements/Headings/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../elements/Todolist/types";
import { CustomToolbarButton } from "./button/CustomToolbarButton";
import ImageToolbarButton from "./button/ImageToolbarButton";
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
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_H1}
          icon={<TextHOne size={24} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_H2}
          icon={<TextHTwo size={32} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_H3}
          icon={<TextHThree size={32} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_H4}
          icon={<TextHFour size={32} />}
        />
        {/* heading buttons ends*/}
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_BLOCKQUOTE}
          icon={<Quotes size={24} weight="fill" />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_HINT}
          icon={<WarningCircle size={24} weight="fill" />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_TODO_LIST}
          icon={<CheckSquare size={24} />}
        />

        <CustomToolbarButton
          type={CUSTOM_ELEMENT_BULLETED_LIST}
          icon={<ListBullets size={24} />}
        />

        <CustomToolbarButton
          icon={<Code size={24} />}
          type={CUSTOM_ELEMENT_CODE_BLOCK}
        />
        <ImageToolbarButton icon={<Image size={32} />} />
        <LinkToolbarButton
          icon={<LinkSimple size={24} weight="bold" />}
          setIsLink={setIsLink}
        />
      </BaloonToolbarContent>
    </BalloonToolbarWrap>
  );
};

export default BallonToolbar;
