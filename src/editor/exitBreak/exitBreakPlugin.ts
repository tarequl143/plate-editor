import {
  ExitBreakPlugin,
  getPlateEditorRef,
  PlatePlugin,
} from "@udecode/plate";
import { CUSTOM_ELEMENT_BLOCKQUOTE } from "../elements/Blockquote/types";
import { CUSTOM_ELEMENT_CODE_BLOCK } from "../elements/CodeBlock/types";
import { headingElementKeys } from "../elements/Headings/createHeadingPlugin";
import { CUSTOM_ELEMENT_HINT } from "../elements/Hint/types";
import { getCurrentNodeLastChildrenLastText } from "../toolbar/utils";

export const exitBreakPlugin: Partial<PlatePlugin<ExitBreakPlugin>> = {
  options: {
    rules: [
      {
        hotkey: "mod+enter",
      },
      {
        hotkey: "mod+shift+enter",
        before: true,
      },
      {
        hotkey: "enter",
        query: {
          start: true,
          end: true,
          allow: [...headingElementKeys],
        },
      },
      {
        hotkey: "enter",
        query: {
          filter(entry) {
            const editor = getPlateEditorRef();
            const lastChildrenText = getCurrentNodeLastChildrenLastText(entry);
            if (lastChildrenText.slice(-1) === "\n") {
              editor?.deleteBackward("character");
              return true;
            }
            return false;
          },
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
