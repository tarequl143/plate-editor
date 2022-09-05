import {
  getPluginType,
  someNode,
  useEventPlateId,
  usePlateEditorState,
  withPlateEventProvider,
} from "@udecode/plate-core";
import { triggerFloatingLink } from "@udecode/plate-link";
import { ToolbarButton, ToolbarButtonProps } from "@udecode/plate-ui-toolbar";
import { useRef } from "react";
import { CUSTOM_ELEMENT_LINK } from "../../elements/Link/types";

export interface LinkToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the link url by calling this promise before inserting the image.
   */
  getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
}

export const LinkToolbarButton = withPlateEventProvider(
  ({ id, getLinkUrl, ...props }: LinkToolbarButtonProps) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;

    const editorSelection = useRef(editor?.selection);

    const type = getPluginType(editor, CUSTOM_ELEMENT_LINK);
    const isLink = !!editor?.selection && someNode(editor, { match: { type } });

    return (
      <>
        <ToolbarButton
          active={isLink}
          onMouseDown={async (event) => {
            if (!editor) return;

            event.preventDefault();
            event.stopPropagation();

            // console.log("Selection", editor.selection);
            // console.log("Last Selection", editor.prevSelection);

            // focusEditor(editor, editor.selection ?? editor.prevSelection!);

            setTimeout(() => {
              triggerFloatingLink(editor, { focused: true });
            }, 0);
          }}
          {...props}
        />
      </>
    );
  },
);
