import { useFocused, useSelected } from "slate-react";

import { ElementWrapper, UnorderedList } from "./OrderedListStyle";

const OrderedListElement = (props: any) => {
  const { attributes, children } = props;
  const selected = useSelected();
  const focused = useFocused();

  return (
    <ElementWrapper
      {...attributes}
      className={`ordered-list-element ${
        focused && selected ? "selected" : ""
      }`}
    >
      <UnorderedList>{children}</UnorderedList>
    </ElementWrapper>
  );
};

export default OrderedListElement;
