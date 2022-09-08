import { ExitBreakPlugin, PlatePlugin } from "@udecode/plate";
import { CUSTOM_ELEMENT_H1 } from "../elements/Headings/types";

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
          allow: [CUSTOM_ELEMENT_H1],
        },
      },
    ],
  },
};
