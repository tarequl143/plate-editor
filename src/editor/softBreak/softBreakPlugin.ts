import { PlatePlugin, SoftBreakPlugin } from "@udecode/plate";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";

export const softBreakPlugin: Partial<PlatePlugin<SoftBreakPlugin>> = {
  options: {
    rules: [
      { hotkey: "shift+enter" },
      {
        hotkey: "enter",
        query: {
          allow: [
            CUSTOM_ELEMENT_BLOCKQUOTE,
            CUSTOM_ELEMENT_HINT,
            CUSTOM_ELEMENT_CODE_BLOCK,
          ],
        },
      },
    ],
  },
};
