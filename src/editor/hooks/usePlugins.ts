import {
  createBoldPlugin,
  createComboboxPlugin,
  createExitBreakPlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createMentionPlugin,
  createPlateUI,
  createPlugins,
  createResetNodePlugin,
  createSelectOnBackspacePlugin,
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
import { createCodeBlockPlugin } from "../elements/CodeBlock/createCodeblockPlugin";
import { createHeadingPlugin } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createImagePlugin } from "../elements/Image/createImagePlugin";
import { CUSTOM_ELEMENT_IMAGE } from "../elements/Image/types";
import { createImageOptionPlugin } from "../elements/ImageOption/createImageOptionPlugin";
import { CUSTOM_ELEMENT_IMAGE_OPTION } from "../elements/ImageOption/types";
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
  // [CUSTOM_ELEMENT_CODE_BLOCK]: CodeBlockElement,
});

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins(
      [
        ...createHeadingPlugin,
        createBoldPlugin(),
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
        createCodeBlockPlugin(),
        createSelectOnBackspacePlugin({
          options: {
            query: {
              allow: [CUSTOM_ELEMENT_IMAGE, CUSTOM_ELEMENT_IMAGE_OPTION],
            },
          },
        }),
      ],
      {
        components: plateUI,
      },
    );
    return allPlugins;
  }, []);
  return plugins;
};
