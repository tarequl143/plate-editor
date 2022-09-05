import { LinkPlugin, PlateFloatingLink, PlatePlugin } from "@udecode/plate";

export const linkPlugin: Partial<PlatePlugin<LinkPlugin>> = {
  renderAfterEditable: PlateFloatingLink,
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
