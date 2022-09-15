import { createPluginFactory } from "@udecode/plate";
import EmbedDataElement from "./EmbedDataElement";
import { CUSTOM_ELEMENT_EMBED_DATA } from "./types";

export const createEmbedDataPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_EMBED_DATA,
  component: EmbedDataElement,
  isVoid: true,
  isElement: true,
});
