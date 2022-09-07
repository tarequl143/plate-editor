import {
  BlockToolbarButton,
  getPluginType,
  usePlateEditorRef,
  usePlateSelection,
} from "@udecode/plate";
import { Quotes, WarningCircle } from "phosphor-react";
import { useEffect, useRef } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { SlashToolbarContent, SlashToolbarWrap } from "./ToolbarStyles";
import { SlashToolbarProps } from "./types";
import { toggleSlashToolbar } from "./utils";

const SlashToolbar = (props: SlashToolbarProps) => {
  // Props Destructuring

  // Baloon Toolobar Ref
  const slashToolberRef: any = useRef();

  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  // Get Editor Selection
  const selection = usePlateSelection()!;

  // Baloon Toolbar Toggle
  useEffect(() => {
    toggleSlashToolbar(editor, slashToolberRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selection]);

  // Console
  // console.log("Editor Baloon", editor);

  return (
    <SlashToolbarWrap ref={slashToolberRef}>
      <SlashToolbarContent>
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_BLOCKQUOTE)}
          icon={<Quotes size={32} weight="fill" />}
        />
        <BlockToolbarButton
          type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
          icon={<WarningCircle size={32} weight="fill" />}
        />
      </SlashToolbarContent>
    </SlashToolbarWrap>
  );
};

export default SlashToolbar;
