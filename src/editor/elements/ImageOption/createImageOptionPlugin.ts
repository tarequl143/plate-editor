import { createPluginFactory } from "@udecode/plate";
import ImageInputElement from "./ImageOptionElement";
import { CUSTOM_ELEMENT_IMAGE_OPTION } from "./types";

export const createImageOptionPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_IMAGE_OPTION,
  isElement: true,
  isVoid: true,
  component: ImageInputElement,
});
