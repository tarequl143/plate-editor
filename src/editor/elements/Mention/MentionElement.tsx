import { useFocused, useSelected } from "slate-react";

import { MentionElem, MentionElemIcon } from "./MentionStyle";

const MentionElement = (props: any) => {
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();

  return (
    <MentionElem {...attributes} isSelected={!!(selected && focused)}>
      {children}
      <a
        href={element.value}
        contentEditable="false"
        suppressContentEditableWarning
      >
        <MentionElemIcon></MentionElemIcon>
        {element.mentionData.text}
      </a>
    </MentionElem>
  );
};

export default MentionElement;

export const MentionItem = (props: any) => {
  return <button>{props.item.text}</button>;
};
