import { onKeyDownToggleElement } from "@udecode/plate";
import { PlatePlugin } from "@udecode/plate-core";
import OrderedListElement from "./OrderedListElement";
import { CUSTOM_ELEMENT_ORDERED_LIST } from "./types";

export const createOrderedListPlugin = (): PlatePlugin => ({
  key: CUSTOM_ELEMENT_ORDERED_LIST,
  isElement: true,
  component: OrderedListElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
