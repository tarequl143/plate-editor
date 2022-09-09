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
  createTodoListPlugin,
  createUnderlinePlugin,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { createHeadingPlugin } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createCustomImagePlugin } from "../elements/Image/createImagePlugin";
import { crateImagePlugin } from "../elements/ImageInput/createImageInputPlugin";
import { linkPlugin } from "../elements/Link/linkPlugin";
import { mentionPlugin } from "../elements/Mention/mentionPlugin";
import TodoListElement from "../elements/Todolist/TodoListElement";
// import { createTodoListPlugin } from "../elements/Todolist/createTodoListPlugin";
import { exitBreakPlugin } from "../exitBreak/exitBreakPlugin";
import { resetNodePlugin } from "../resetNode/resetNodePlugin";
import { softBreakPlugin } from "../softBreak/softBreakPlugin";

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins([
      ...createHeadingPlugin,
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
      createTodoListPlugin({
        component: TodoListElement,
      }),
      createLinkPlugin(linkPlugin),
      createResetNodePlugin(resetNodePlugin),
      createExitBreakPlugin(exitBreakPlugin),
      createSoftBreakPlugin(softBreakPlugin),
      createComboboxPlugin(),
      createMentionPlugin(mentionPlugin),
      crateImagePlugin(),
      createCustomImagePlugin(),
    ]);
    return allPlugins;
  }, []);
  return plugins;
};
