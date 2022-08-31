import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import BlockquoteElement from "./BlockquoteElement";

import { CUSTOM_ELEMENT_BLOCKQUOTE } from "./types";

export const createBlockquotePlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_BLOCKQUOTE,
  isElement: true,
  component: BlockquoteElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
