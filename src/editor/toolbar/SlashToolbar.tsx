import { usePlateEditorRef, usePlateSelection } from "@udecode/plate";
import { useEffect, useMemo, useRef, useState } from "react";
import TableToolbarButtons from "../elements/Table/TableToolbarButtons";
import { CustomToolbarButton } from "./button/CustomToolbarButton";
import { SlashToolbarElements } from "./SlashToolbarElements";
import { SlashToolbarContent, SlashToolbarWrap } from "./ToolbarStyles";
import { SlashToolbarProps } from "./types";
import { slashToolbarInitial, toggleSlashToolbar } from "./utils";

const SlashToolbar = (props: SlashToolbarProps) => {
  const [slashToolbarTarger, setSlashToolbarTarget] = useState<any>("");
  const [searchTerm, setSearchTerm] = useState("");

  // Baloon Toolobar Ref
  const slashToolberRef: any = useRef();

  // Get Editor Ref
  const editor = usePlateEditorRef()!;

  // Get Editor Selection
  const selection = usePlateSelection()!;

  // Toolbar Filtered Elements
  const filteredToolbarElements = useMemo(() => {
    return searchTerm
      ? SlashToolbarElements.filter((element) =>
          element.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : SlashToolbarElements;
  }, [searchTerm]);
  // const filterToolbar = filteredToolbarElements();

  // Baloon Toolbar Toggle
  useEffect(() => {
    toggleSlashToolbar(editor, slashToolberRef, slashToolbarTarger);
  }, [editor, slashToolbarTarger]);

  useEffect(() => {
    slashToolbarInitial(setSlashToolbarTarget, setSearchTerm);
  }, [selection]);

  return (
    <SlashToolbarWrap ref={slashToolberRef}>
      {filteredToolbarElements?.length > 0 ? (
        <SlashToolbarContent>
          {filteredToolbarElements.map((element, index) => {
            if (element.type === "TABLE") {
              return (
                <TableToolbarButtons
                  showAddTableOnly
                  key={index}
                  icon={element.icon}
                />
              );
            } else {
              return (
                <CustomToolbarButton
                  key={index}
                  type={element.type}
                  icon={element.icon}
                  additionalProps={element.additionalProps}
                />
              );
            }
          })}
        </SlashToolbarContent>
      ) : // <BlockToolbarButton
      //   type={getPluginType(editor, CUSTOM_ELEMENT_BLOCKQUOTE)}
      //   icon={<Quotes size={32} weight="fill" />}
      // />
      // <BlockToolbarButton
      //   type={getPluginType(editor, CUSTOM_ELEMENT_HINT)}
      //   icon={<WarningCircle size={32} weight="fill" />}
      // />

      // <ImageToolbarButton icon={<Image size={24} weight="duotone" />} />
      // <CustomToolbarButton
      //   type={CUSTOM_ELEMENT_BULLETED_LIST}
      //   icon={<ListBullets size={24} />}
      // />
      // <CustomToolbarButton
      //   type={CUSTOM_ELEMENT_ORDERED_LIST}
      //   icon={<ListNumbers size={24} />}
      // />
      // <TableToolbarButtons showAddTableOnly />
      // <BlockToolbarButton
      //   icon={<Code size={24} />}
      //   type={getPluginType(editor, CUSTOM_ELEMENT_CODE_BLOCK)}
      // />
      // <CustomToolbarButton
      //   icon={<BatteryEmpty size={24} />}
      //   type={getPluginType(editor, CUSTOM_ELEMENT_SPACER)}
      // />
      // <CustomToolbarButton
      //   icon={<Minus size={24} />}
      //   type={CUSTOM_ELEMENT_SEPERATOR}
      // />
      // <CustomToolbarButton
      //   icon={<FigmaLogo size={24} />}
      //   type={CUSTOM_ELEMENT_EMBED}
      //   additionalProps={{
      //     type: "design",
      //   }}
      // />
      // <CustomToolbarButton
      //   icon={<YoutubeLogo size={24} />}
      //   type={CUSTOM_ELEMENT_EMBED}
      //   additionalProps={{
      //     type: "video",
      //   }}
      // />
      // <CustomToolbarButton
      //   icon={<PencilSimple size={24} />}
      //   type={CUSTOM_ELEMENT_SKETCH}
      // />

      null}
    </SlashToolbarWrap>
  );
};

export default SlashToolbar;
