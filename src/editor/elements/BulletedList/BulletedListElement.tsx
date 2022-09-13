import { useFocused, useSelected } from "slate-react";
import { ElementWrapper, UnorderedList } from "./BulletedListStyle";

const BulletedListElement = (props: any) => {
  const { attributes, children } = props;
  const selected = useSelected();
  const focused = useFocused();

  return (
    <ElementWrapper
      {...attributes}
      className={`bulleted-list-element ${
        focused && selected ? "selected" : ""
      }`}
    >
      <UnorderedList>{children}</UnorderedList>
    </ElementWrapper>
  );
};

export default BulletedListElement;
