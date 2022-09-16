import {
  getPluginType,
  MarkToolbarButton,
  MARK_BOLD,
  MARK_CODE,
  MARK_HIGHLIGHT,
  MARK_ITALIC,
  MARK_STRIKETHROUGH,
  MARK_UNDERLINE,
  usePlateEditorRef,
  usePlateSelection,
} from "@udecode/plate";
import {
  CheckSquareOffset,
  Code,
  LinkSimple,
  ListBullets,
  ListNumbers,
  Pen,
  TextBolder,
  TextHOne,
  TextHThree,
  TextHTwo,
  TextItalic,
  TextStrikethrough,
  TextUnderline,
} from "phosphor-react";
import { useEffect, useRef } from "react";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../elements/BulletedList/types";
import {
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
} from "../elements/Headings/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../elements/OrderedList/types";
import { CUSTOM_ELEMENT_TODO_LIST } from "../elements/Todolist/types";
import { CustomToolbarButton } from "./button/CustomToolbarButton";
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
          icon={<TextBolder size={24} />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_ITALIC)}
          icon={<TextItalic size={24} />}
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
          icon={<Pen size={24} weight="duotone" />}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_CODE)}
          icon={<Code size={24} />}
        />
        {/* <MarkToolbarButton
          type={getPluginType(editor, MARK_SUPERSCRIPT)}
          icon={<Upload size={24} />}
          clear={getPluginType(editor, MARK_SUBSCRIPT)}
        />
        <MarkToolbarButton
          type={getPluginType(editor, MARK_SUBSCRIPT)}
          icon={<Download size={24} />}
          clear={getPluginType(editor, MARK_SUPERSCRIPT)}
        /> */}
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
        {/* <CustomToolbarButton
          type={CUSTOM_ELEMENT_H4}
          icon={<TextHFour size={32} />}
        /> */}
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_BULLETED_LIST}
          icon={<ListBullets size={24} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_ORDERED_LIST}
          icon={<ListNumbers size={24} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_TODO_LIST}
          icon={<CheckSquareOffset size={24} weight="duotone" />}
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
