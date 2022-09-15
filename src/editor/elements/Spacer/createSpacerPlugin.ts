import { createPluginFactory } from "@udecode/plate";
import SeparatorElement from "./SpacerElement";
import { CUSTOM_ELEMENT_SPACER } from "./types";

export const createSpacerPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_SPACER,
  component: SeparatorElement,
  isVoid: true,
  isElement: true,
});
