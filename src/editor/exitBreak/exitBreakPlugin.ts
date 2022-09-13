import { ExitBreakPlugin, PlatePlugin } from "@udecode/plate";
import { headingElementKeys } from "../elements/Headings/createHeadingPlugin";

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
    ],
  },
};
