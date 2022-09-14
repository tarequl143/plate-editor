import { onKeyDownToggleElement } from "@udecode/plate";
import { PlatePlugin } from "@udecode/plate-core";
import BulletedListElement from "./BulletedListElement";
import { CUSTOM_ELEMENT_BULLETED_LIST } from "./types";

export const createBulletedListPlugin = (): PlatePlugin => ({
  key: CUSTOM_ELEMENT_BULLETED_LIST,
  isElement: true,
  component: BulletedListElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
