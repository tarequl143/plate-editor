import { PlateRenderElementProps } from "@udecode/plate";
import BlockquoteElement from "../elements/Blockquote/BlockquoteElement";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import HintElement from "../elements/Hint/HintElement";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import ParagraphElement from "../elements/Paragraph/ParagraphElement";

export const ElementRenderer = (props: PlateRenderElementProps) => {
  const { element } = props;

  console.log("Render Props", props);

  switch (element.type) {
    case CUSTOM_ELEMENT_BLOCKQUOTE:
      return <BlockquoteElement {...props} />;
    case CUSTOM_ELEMENT_HINT:
      return <HintElement {...props} />;
    default:
      return <ParagraphElement {...props} />;
  }
};
