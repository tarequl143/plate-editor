import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import HeadingElement from "./HeadingElement";
import { CUSTOM_ELEMENT_H1 } from "./types";

export const createH1Plugin = createPluginFactory({
  key: CUSTOM_ELEMENT_H1,
  isElement: true,
  component: HeadingElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
