import { createPluginFactory, ImagePlugin } from "@udecode/plate";
import ImageElement from "./ImageElement";
import { CUSTOM_ELEMENT_IMAGE } from "./types";

export const createImagePlugin = createPluginFactory<ImagePlugin>({
  key: CUSTOM_ELEMENT_IMAGE,
  isElement: true,
  component: ImageElement,
  isVoid: true,
});
