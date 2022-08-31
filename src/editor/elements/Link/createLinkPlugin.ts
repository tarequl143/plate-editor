import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import LinkElement from "./LinkElement";
import { CUSTOM_ELEMENT_LINK } from "./types";
import { withLink } from "./withLink";

export const createLinkPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_LINK,
  isElement: true,
  isInline: true,
  component: LinkElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
  withOverrides: withLink,
});
