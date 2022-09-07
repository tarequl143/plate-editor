import { ELEMENT_LINK, focusEditor } from "@udecode/plate";
import {
  getPluginType,
  someNode,
  useEventPlateId,
  usePlateEditorState,
  withPlateEventProvider,
} from "@udecode/plate-core";
import { triggerFloatingLink } from "@udecode/plate-link";
import { ToolbarButton, ToolbarButtonProps } from "@udecode/plate-ui-toolbar";
const CUSTOM_ELEMENT_LINK = "custom_elem_link";

export interface LinkToolbarButtonProps extends ToolbarButtonProps {
  /**
   * Default onMouseDown is getting the link url by calling this promise before inserting the image.
   */
  getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
}

export const LinkToolbarButton = withPlateEventProvider(
  ({ id, getLinkUrl, setIsLink, ...props }: LinkToolbarButtonProps) => {
    id = useEventPlateId(id);
    const editor = usePlateEditorState(id)!;

    const type = getPluginType(editor, ELEMENT_LINK);
    const isLink = !!editor?.selection && someNode(editor, { match: { type } });

    return (
      <>
        <ToolbarButton
          active={isLink}
          onMouseDown={async (event) => {
            if (!editor) return;
            setIsLink(true);

            event.preventDefault();
            event.stopPropagation();

            focusEditor(editor, editor.selection ?? editor.prevSelection!);

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
