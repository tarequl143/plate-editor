import { isElement, usePlateEditorRef } from "@udecode/plate";
import { nanoid } from "nanoid";
import { RenderElementProps, useFocused, useSelected } from "slate-react";
import { headingElementKeys } from "./createHeadingPlugin";
import { Heading } from "./HintStyle";

type Elements = typeof headingElementKeys[number];
const headingType: Record<Elements, string> = {
  custom_elem_h1: "h1",
  custom_elem_H2: "h2",
  custom_elem_H3: "h3",
  custom_elem_H4: "h4",
};

const HeadingElement = (props: RenderElementProps) => {
  // const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const selected = useSelected();
  const focused = useFocused();
  const id = nanoid();
  console.log("Heading props", props);

  // heading type
  const elementType: Elements = (
    isElement(element) ? element["type"] : "custom_elem_h1"
  ) as Elements;

  return (
    <Heading
      type={headingType[elementType]}
      {...attributes}
      as={headingType[elementType] as keyof JSX.IntrinsicElements}
      className={`heading-element ${selected && focused ? "selected" : ""}`}
    >
      {children}
    </Heading>
  );
};

export default HeadingElement;
