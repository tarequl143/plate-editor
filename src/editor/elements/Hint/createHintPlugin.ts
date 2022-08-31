import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import HintElement from "./HintElement";
import { CUSTOM_ELEMENT_HINT } from "./types";

export const createHintPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_HINT,
  isElement: true,
  component: HintElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
