import { createPluginFactory } from "@udecode/plate";
import ImageInputElement from "./ImageInputElement";
import { CUSTOM_IMAGE_INPUT } from "./types";

export const crateImagePlugin = createPluginFactory({
  key: CUSTOM_IMAGE_INPUT,
  isElement: true,
  component: ImageInputElement,
});
