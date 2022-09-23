import { PlateRenderElementProps } from "@udecode/plate";
import { useFocused, useSelected } from "slate-react";
import { StyledTable, ToolbarButtonWrapper } from "./TableStyle";
import TableToolbarButtons from "./TableToolbarButtons";

const TableElement = (props: PlateRenderElementProps) => {
  const focused = useFocused();
  const selected = useSelected();
  return (
    <div
      {...props.attributes}
      className={`table-element ${selected && focused ? "selected" : ""}`}
    >
      <ToolbarButtonWrapper>
        <TableToolbarButtons />
      </ToolbarButtonWrapper>
      <StyledTable {...props} />
    </div>
  );
};

export default TableElement;
