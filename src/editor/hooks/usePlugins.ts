import {
  createBoldPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createExitBreakPlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createMentionPlugin,
  createPlugins,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createUnderlinePlugin,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { HeadingPlugins } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { linkPlugin } from "../elements/Link/linkPlugin";
import { mentionPlugin } from "../elements/Mention/mentionPlugin";
import { exitBreakPlugin } from "../exitBreak/exitBreakPlugin";
import { resetNodePlugin } from "../resetNode/resetNodePlugin";
import { softBreakPlugin } from "../softBreak/softBreakPlugin";

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins([
      ...HeadingPlugins,
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
      createLinkPlugin(linkPlugin),
      createResetNodePlugin(resetNodePlugin),
      createExitBreakPlugin(exitBreakPlugin),
      createSoftBreakPlugin(softBreakPlugin),
      createComboboxPlugin(),
      createMentionPlugin(mentionPlugin),
    ]);
    return allPlugins;
  }, []);
  return plugins;
};
