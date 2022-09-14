import { createPluginFactory } from "@udecode/plate";
import CodeBlockElement from "./CodeBlockElement";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "./types";

export const createCodeBlockPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_CODE_BLOCK,
  component: CodeBlockElement,
  isElement: true,
});
