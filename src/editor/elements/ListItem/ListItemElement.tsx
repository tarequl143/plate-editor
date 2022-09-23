import { useFocused, useSelected } from "slate-react";
import { ListItem } from "./ListItemStyle";

const ListItemElement = (props: any) => {
  const { attributes, children } = props;
  const focused = useFocused();
  const selected = useSelected();

  return (
    <ListItem
      {...attributes}
      className={`list-element ${selected && focused ? "selected" : ""}`}
    >
      {children}
    </ListItem>
  );
};

export default ListItemElement;
