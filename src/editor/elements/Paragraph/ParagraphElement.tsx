import { PlateRenderElementProps, usePlateEditorRef } from "@udecode/plate";
import { CustomElemParagraph } from "./ParagraphStyle";

const ParagraphElement = (props: PlateRenderElementProps) => {
  console.log(props.editor);
  const { attributes, children } = props;
  const editor = usePlateEditorRef()!;

  return (
    <CustomElemParagraph {...attributes} className="custom-paragraph-element">
      {children}
    </CustomElemParagraph>
  );
};

export default ParagraphElement;
