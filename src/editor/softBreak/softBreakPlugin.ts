import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";

export const softBreakPlugin: any = {
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [CUSTOM_ELEMENT_BLOCKQUOTE, CUSTOM_ELEMENT_HINT],
        },
      },
    ],
  },
};
