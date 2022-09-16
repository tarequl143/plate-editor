import { createPluginFactory } from "@udecode/plate-core";
import SketchElement from "./SketchElement";
import { CUSTOM_ELEMENT_SKETCH } from "./types";

export const createSketchPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_SKETCH,
  component: SketchElement,
  isElement: true,
  isVoid: true,
});
