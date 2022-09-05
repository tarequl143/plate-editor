import {
  ELEMENT_PARAGRAPH,
  isBlockAboveEmpty,
  isSelectionAtBlockStart,
  PlatePlugin,
  ResetNodePlugin,
} from "@udecode/plate";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";

const resetBlockTypesCommonRule = {
  types: [CUSTOM_ELEMENT_BLOCKQUOTE],
  defaultType: ELEMENT_PARAGRAPH,
};

export const resetNodePlugin: Partial<PlatePlugin<ResetNodePlugin>> = {
  options: {
    rules: [
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Enter",
        predicate: isBlockAboveEmpty,
      },
      {
        ...resetBlockTypesCommonRule,
        hotkey: "Backspace",
        predicate: isSelectionAtBlockStart,
      },
    ],
  },
};
