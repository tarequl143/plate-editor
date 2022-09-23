import {
  createBoldPlugin,
  createComboboxPlugin,
  createExitBreakPlugin,
  createHighlightPlugin,
  createItalicPlugin,
  createLinkPlugin,
  createMentionPlugin,
  createParagraphPlugin,
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
  ELEMENT_LINK,
  ELEMENT_PARAGRAPH,
  ELEMENT_TABLE,
} from "@udecode/plate";
import { useMemo } from "react";
import { createBlockquotePlugin } from "../elements/Blockquote/createBlockquotePlugin";
import { createBulletedListPlugin } from "../elements/BulletedList/createBulletedListPlugin";
import { createCodeBlockPlugin } from "../elements/CodeBlock/createCodeblockPlugin";
import { createEmbedPlugin } from "../elements/Embed/createEmbedPlugin";
import { CUSTOM_ELEMENT_EMBED } from "../elements/Embed/types";
import { createEmbedDataPlugin } from "../elements/EmbedData/createEmbedDataPlugin";
import { createHeadingPlugin } from "../elements/Headings/createHeadingPlugin";
import { createHintPlugin } from "../elements/Hint/createHintPlugin";
import { createImagePlugin } from "../elements/Image/createImagePlugin";
import { CUSTOM_ELEMENT_IMAGE } from "../elements/Image/types";
import { createImageOptionPlugin } from "../elements/ImageOption/createImageOptionPlugin";
import { CUSTOM_ELEMENT_IMAGE_OPTION } from "../elements/ImageOption/types";
import LinkElement from "../elements/Link/LinkElement";
import { linkPlugin } from "../elements/Link/linkPlugin";
import { createListPlugin } from "../elements/ListItem/createListItemPlugin";
import { mentionPlugin } from "../elements/Mention/mentionPlugin";
import { createOrderedListPlugin } from "../elements/OrderedList/createOrderedListPlugin";
import ParagraphElement from "../elements/Paragraph/ParagraphElement";
import { createSeparatorPlugin } from "../elements/Separator/createSeparatorPlugin";
import { createSketchPlugin } from "../elements/Sketch/createSketchPlugin";
import { createSpacerPlugin } from "../elements/Spacer/createSpacerPlugin";
import TableElement from "../elements/Table/TableElement";
import { createTodoListPlugin } from "../elements/Todolist/createTodoListPlugin";
import { exitBreakPlugin } from "../exitBreak/exitBreakPlugin";
import { resetNodePlugin } from "../resetNode/resetNodePlugin";
import { softBreakPlugin } from "../softBreak/softBreakPlugin";

export const plateUI = createPlateUI({
  [ELEMENT_TABLE]: TableElement,
  [ELEMENT_PARAGRAPH]: ParagraphElement,
  [ELEMENT_LINK]: LinkElement,
});

export const usePlugins = () => {
  const plugins = useMemo(() => {
    const allPlugins = createPlugins(
      [
        ...createHeadingPlugin,
        createBoldPlugin(),
        createParagraphPlugin({
          key: ELEMENT_PARAGRAPH,
          // component: ParagraphElement,
        }),
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
        createBulletedListPlugin(),
        createOrderedListPlugin(),
        createListPlugin(),
        createCodeBlockPlugin(),
        createSelectOnBackspacePlugin({
          options: {
            query: {
              allow: [
                CUSTOM_ELEMENT_IMAGE,
                CUSTOM_ELEMENT_IMAGE_OPTION,
                CUSTOM_ELEMENT_EMBED,
              ],
            },
          },
        }),
        createSpacerPlugin(),
        createSeparatorPlugin(),
        createEmbedPlugin(),
        createEmbedDataPlugin(),
        createSketchPlugin(),
      ],
      {
        components: plateUI,
      },
    );
    return allPlugins;
  }, []);
  return plugins;
};
