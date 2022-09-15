import { ELEMENT_PARAGRAPH } from "@udecode/plate";

// returns a paragraph
export const createEmptyParagraph = () => ({
  type: ELEMENT_PARAGRAPH,
  children: [{ text: "" }],
});
