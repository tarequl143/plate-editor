import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import HeadingElement from "./HeadingElement";
import {
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
} from "./types";

export const headingElementKeys = [
  CUSTOM_ELEMENT_H1,
  CUSTOM_ELEMENT_H2,
  CUSTOM_ELEMENT_H3,
] as const;

// array of heading plugins
// uses same component and handlers
export const createHeadingPlugin = headingElementKeys.map((KEY) =>
  createPluginFactory({
    key: KEY,
    isElement: true,
    component: HeadingElement,
    handlers: {
      onKeyDown: onKeyDownToggleElement,
    },
  })()
);
