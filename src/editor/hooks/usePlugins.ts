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
  createUnderlinePlugin,
  ELEMENT_TABLE,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { createBulletedListPlugin } from "../elements/BulletedList/createBulletedListPlugin";
import { createHeadingPlugin } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createImagePlugin } from "../elements/Image/createImagePlugin";
import { createImageOptionPlugin } from "../elements/ImageOption/createImageOptionPlugin";
import { linkPlugin } from "../elements/Link/linkPlugin";
import { createListPlugin } from "../elements/ListItem/createListItemPlugin";
import { mentionPlugin } from "../elements/Mention/mentionPlugin";
import { createOrderedListPlugin } from "../elements/OrderedList/createOrderedListPlugin";
import TableElement from "../elements/Table/TableElement";
import { createTodoListPlugin } from "../elements/Todolist/createTodoListPlugin";
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
        createTodoListPlugin(),
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
        // createListPlugin(),
        createBulletedListPlugin(),
        createOrderedListPlugin(),
        createListPlugin(),
      ],
      {
        components: plateUI,
      },
    );
    return allPlugins;
  }, []);
  return plugins;
};
