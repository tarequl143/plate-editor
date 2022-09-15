import {
  BlockToolbarButton,
  getPluginType,
  usePlateEditorRef,
  usePlateSelection,
} from "@udecode/plate";
import {
  ArrowsVertical,
  Code,
  ListBullets,
  ListNumbers,
  Quotes,
  WarningCircle,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "../elements/BulletedList/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { CUSTOM_ELEMENT_EMBED } from "../elements/Embed/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "../elements/OrderedList/types";
import { CUSTOM_ELEMENT_SEPERATOR } from "../elements/Separator/types";
import { CUSTOM_ELEMENT_SPACER } from "../elements/Spacer/types";
import TableToolbarButtons from "../elements/Table/TableToolbarButtons";
import { CustomToolbarButton } from "./button/CustomToolbarButton";
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
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_BULLETED_LIST}
          icon={<ListBullets size={24} />}
        />
        <CustomToolbarButton
          type={CUSTOM_ELEMENT_ORDERED_LIST}
          icon={<ListNumbers size={24} />}
        />
        <TableToolbarButtons showAddTableOnly />
        <BlockToolbarButton
          icon={<Code size={24} />}
          type={getPluginType(editor, CUSTOM_ELEMENT_CODE_BLOCK)}
        />
        <CustomToolbarButton
          icon={<ArrowsVertical size={32} />} // TODO update icon
          type={getPluginType(editor, CUSTOM_ELEMENT_SPACER)}
        />
        <CustomToolbarButton
          icon={<ArrowsVertical size={32} />} // TODO update icon
          type={CUSTOM_ELEMENT_SEPERATOR}
        />
        <CustomToolbarButton
          icon={<ArrowsVertical size={32} />} // TODO update icon
          type={CUSTOM_ELEMENT_EMBED}
        />
      </SlashToolbarContent>
    </SlashToolbarWrap>
  );
};

export default SlashToolbar;
