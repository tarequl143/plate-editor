import styled from "styled-components";
import { TableElement } from "@udecode/plate-ui-table";

export const ToolbarButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4;
`;

export const StyledTable = styled(TableElement)`
  background: red;

  td {
    border: 1px solid rgba(209, 213, 219, 1);
  }
`;
