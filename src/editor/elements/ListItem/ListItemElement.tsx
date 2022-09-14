import { ListItem } from './ListItemStyle';

const ListItemElement = (props: any) => {
  const { attributes, children } = props;

  return <ListItem {...attributes}>{children}</ListItem>;
};

export default ListItemElement;
