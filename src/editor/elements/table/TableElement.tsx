import { PlateRenderElementProps } from "@udecode/plate";
import { StyledTable, ToolbarButtonWrapper } from "./styles";
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
