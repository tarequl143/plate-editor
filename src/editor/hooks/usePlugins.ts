import {
  createBoldPlugin,
  createCodePlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createPlugins,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createLinkPlugin } from "../elements/Link/createLinkPlugin";
import { softBreakPlugin } from "../softBreak/softBreakPlugin";

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins([
      createBoldPlugin(),
      createCodePlugin(),
      createItalicPlugin(),
      createHighlightPlugin(),
      createUnderlinePlugin(),
      createStrikethroughPlugin(),
      createSubscriptPlugin(),
      createSuperscriptPlugin(),
      createBlockquotePlugin(),
      createHintPlugin(),
      createLinkPlugin(),
      createSoftBreakPlugin(softBreakPlugin),
    ]);
    return allPlugins;
  }, []);
  return plugins;
};
