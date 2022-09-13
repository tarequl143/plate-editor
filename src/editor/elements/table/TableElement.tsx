import { PlateRenderElementProps } from "@udecode/plate";
import { StyledTable, ToolbarButtonWrapper } from "./TableStyle";
import TableToolbarButtons from "./TableToolbarButtons";

const TableElement = (props: PlateRenderElementProps) => {
  return (
    <>
      <ToolbarButtonWrapper>
        <TableToolbarButtons />
      </ToolbarButtonWrapper>
      <StyledTable {...props} />
    </>
  );
};

export default TableElement;
