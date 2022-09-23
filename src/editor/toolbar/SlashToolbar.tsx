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
          element.title.toLowerCase().includes(searchTerm.toLowerCase()),
        )
      : SlashToolbarElements;
  }, [searchTerm]);

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
      ) : null}
    </SlashToolbarWrap>
  );
};

export default SlashToolbar;
