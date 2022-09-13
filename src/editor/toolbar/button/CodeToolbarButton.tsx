import {
  ToolbarButton,
  ToolbarButtonProps,
  usePlateEditorState,
  withPlateEventProvider,
} from "@udecode/plate";

type Props = ToolbarButtonProps;

const ImageToolbarButton = withPlateEventProvider((props: Props) => {
  const { id } = props;
  const editor = usePlateEditorState(id)!;

  return (
    <ToolbarButton
      onMouseDown={async (event) => {
        if (!editor) return;
        event.preventDefault();
        event.stopPropagation();
      }}
      {...props}
    />
  );
});

export default ImageToolbarButton;
