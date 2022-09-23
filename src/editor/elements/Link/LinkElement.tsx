import { useFocused, useSelected } from "slate-react";

import { HrefElem, LinkElem } from "./LinkStyle";

const LinkElement = (props: any) => {
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();

  console.log(props);

  return (
    <LinkElem
      {...attributes}
      className={`link-inline-element ${selected && focused ? "selected" : ""}`}
    >
      <HrefElem
        href={element.url}
        className="absolute-view"
        target="_blank"
        contentEditable="false"
        rel="noreferrer"
        suppressContentEditableWarning
      >
        {element.url}
      </HrefElem>
      {children}
    </LinkElem>
  );
};

export default LinkElement;
