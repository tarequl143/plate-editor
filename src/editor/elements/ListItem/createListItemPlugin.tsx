import { onKeyDownToggleElement } from "@udecode/plate";
import { PlatePlugin } from "@udecode/plate-core";
import ListItemElement from "./ListItemElement";
import { CUSTOM_ELEMENT_LIST_ITEM } from "./types";

export const createListPlugin = (): PlatePlugin => ({
  key: CUSTOM_ELEMENT_LIST_ITEM,
  isElement: true,
  component: ListItemElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
