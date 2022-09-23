import { nanoid } from "nanoid";
import { WarningCircle } from "phosphor-react";
import { RenderElementProps, useFocused, useSelected } from "slate-react";
import { ElementWrapper, HintIcon } from "./HintStyle";

const HintElement = (props: RenderElementProps) => {
  const { attributes, children } = props;
  const selected = useSelected();
  const focused = useFocused();
  const id = nanoid();

  return (
    <ElementWrapper
      {...attributes}
      className={`hint-element ${selected && focused ? "selected" : ""}`}
    >
      <HintIcon contentEditable={false} suppressContentEditableWarning>
        <WarningCircle size={24} weight="duotone" />
      </HintIcon>
      {children}
    </ElementWrapper>
  );
};

export default HintElement;
