import { createPluginFactory } from "@udecode/plate";
import EmbedElement from "./EmbedElement";
import { CUSTOM_ELEMENT_EMBED } from "./types";

export const createEmbedPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_EMBED,
  component: EmbedElement,
  isElement: true,
  isVoid: true,
});
