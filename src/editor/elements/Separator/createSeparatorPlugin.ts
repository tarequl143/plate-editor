import { createPluginFactory } from "@udecode/plate";
import SeparatorElement from "./SeparatorElement";
import { CUSTOM_ELEMENT_SEPERATOR } from "./types";

export const createSeparatorPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_SEPERATOR,
  component: SeparatorElement,
  isElement: true,
  isVoid: true,
});
