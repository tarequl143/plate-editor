import {
  deleteColumn,
  deleteRow,
  deleteTable,
  insertTable,
  insertTableColumn,
  insertTableRow,
  TableToolbarButton,
} from "@udecode/plate";
import { Airplane, Columns, Rows, Table } from "phosphor-react";
import React from "react";
import { ToolbarButtonWrapper } from "./styles";

type Props = {
  showAddTableOnly?: boolean;
};

const TableToolbarButtons = (props: Props) => {
  if (props.showAddTableOnly) {
    return (
      <ToolbarButtonWrapper>
        <TableToolbarButton
          icon={<Table size={32} />}
          transform={insertTable}
        />
      </ToolbarButtonWrapper>
    );
  }

  return (
    <ToolbarButtonWrapper>
      <TableToolbarButton icon={<Airplane />} transform={deleteTable} />
      <TableToolbarButton
        icon={<Rows size={32} />}
        transform={insertTableRow}
      />
      <TableToolbarButton icon={<Airplane />} transform={deleteRow} />
      <TableToolbarButton
        icon={<Columns size={32} />}
        transform={insertTableColumn}
      />
      <TableToolbarButton icon={<Airplane />} transform={deleteColumn} />
    </ToolbarButtonWrapper>
  );
};

export default TableToolbarButtons;
