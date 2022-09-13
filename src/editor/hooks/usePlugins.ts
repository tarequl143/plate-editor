import {
  createBoldPlugin,
  createCodePlugin,
  createComboboxPlugin,
  createExitBreakPlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createMentionPlugin,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSoftBreakPlugin,
  createStrikethroughPlugin,
  createSubscriptPlugin,
  createSuperscriptPlugin,
  createTablePlugin,
  createTodoListPlugin,
  createUnderlinePlugin,
  ELEMENT_TABLE,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { createHeadingPlugin } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createImagePlugin } from "../elements/Image/createImagePlugin";
import { createImageOptionPlugin } from "../elements/ImageOption/createImageOptionPlugin";
import { linkPlugin } from "../elements/Link/linkPlugin";
import { mentionPlugin } from "../elements/Mention/mentionPlugin";
import TableElement from "../elements/Table/TableElement";
import TodoListElement from "../elements/Todolist/TodoListElement";
import { exitBreakPlugin } from "../exitBreak/exitBreakPlugin";
import { resetNodePlugin } from "../resetNode/resetNodePlugin";
import { softBreakPlugin } from "../softBreak/softBreakPlugin";

export const plateUI = createPlateUI({
  [ELEMENT_TABLE]: TableElement,
});

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins(
      [
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
        createImagePlugin(),
        createImageOptionPlugin(),
        createSoftBreakPlugin(),
        createTablePlugin(),
      ],
      {
        components: plateUI,
      },
    );
    return allPlugins;
  }, []);
  return plugins;
};
