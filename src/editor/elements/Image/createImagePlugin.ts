import { createPluginFactory, ImagePlugin } from "@udecode/plate";
import ImageElement from "./ImageElement";
import { CUSTOM_IMAGE_ELEMENT } from "./types";

export const createCustomImagePlugin = createPluginFactory<ImagePlugin>({
  key: CUSTOM_IMAGE_ELEMENT,
  isElement: true,
  component: ImageElement,
  isVoid: true,
});
