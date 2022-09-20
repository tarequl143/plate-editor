import {
  deleteColumn,
  deleteRow,
  deleteTable,
  insertTable,
  insertTableColumn,
  insertTableRow,
  TableToolbarButton,
} from "@udecode/plate";
import { Airplane, Columns, Rows } from "phosphor-react";
import { ToolbarButtonWrapper } from "./TableStyle";

type Props = {
  showAddTableOnly?: boolean;
  icon?: React.ReactNode;
};

const TableToolbarButtons = (props: Props) => {
  if (props.showAddTableOnly) {
    return <TableToolbarButton icon={props.icon} transform={insertTable} />;
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
