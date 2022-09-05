import { MentionPlugin, PlatePlugin } from "@udecode/plate";
import MentionElement from "./MentionElement";
import { CUSTOM_ELEMENT_MENTION_ITEM } from "./types";

export const mentionPlugin: Partial<PlatePlugin<MentionPlugin>> = {
  key: CUSTOM_ELEMENT_MENTION_ITEM,
  component: MentionElement,
  options: {
    trigger: "@",
    insertSpaceAfterMention: true,
    createMentionNode: (item: any, meta: any) => {
      return { type: CUSTOM_ELEMENT_MENTION_ITEM, mentionData: item };
    },
  },
};
