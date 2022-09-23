import { LinkPlugin, PlateFloatingLink, PlatePlugin } from "@udecode/plate";
import LinkElement from "./LinkElement";

export const linkPlugin: Partial<PlatePlugin<LinkPlugin>> = {
  renderAfterEditable: PlateFloatingLink,
  component: LinkElement,
  
};

// export const createLinkPlugin = createPluginFactory({
//   key: CUSTOM_ELEMENT_LINK,
//   isElement: true,
//   isInline: true,
//   component: LinkElement,
//   handlers: {
//     onKeyDown: onKeyDownToggleElement,
//   },
//   withOverrides: withLink,
//   renderAfterEditable: PlateFloatingLink,
// });
