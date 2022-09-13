import {
  BlockToolbarButton,
  getPluginType,
  usePlateEditorRef,
  usePlateSelection,
} from "@udecode/plate";
import { Code, Quotes, WarningCircle } from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import TableToolbarButtons from "../elements/Table/TableToolbarButtons";
import { SlashToolbarContent, SlashToolbarWrap } from "./ToolbarStyles";
import { SlashToolbarProps } from "./types";
import { slashToolbarInitial, toggleSlashToolbar } from "./utils";

const SlashToolbar = (props: SlashToolbarProps) => {
  const [slashToolbarTarger, setSlashToolbarTarget] = useState<any>("");
  const [searchTerm, setSearchTerm] = useState("");
  // Props Destructuring

  // Baloon Toolobar Ref
  const slashToolberRef: any = useRef();

  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  // Get Editor Selection
  const selection = usePlateSelection()!;

  // Baloon Toolbar Toggle
  useEffect(() => {
    toggleSlashToolbar(editor, slashToolberRef, slashToolbarTarger);
  }, [editor, slashToolbarTarger]);

  useEffect(() => {
    slashToolbarInitial(setSlashToolbarTarget, setSearchTerm);
  }, [selection]);

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
        <TableToolbarButtons showAddTableOnly />
        <BlockToolbarButton
          icon={<Code size={24} />}
          type={getPluginType(editor, CUSTOM_ELEMENT_CODE_BLOCK)}
        />
      </SlashToolbarContent>
    </SlashToolbarWrap>
  );
};

export default SlashToolbar;
