import { usePlateEditorRef } from "@udecode/plate";
import { CustomElemParagraph } from "./ParagraphStyle";

const ParagraphElement = (props: any) => {
  const { attributes, children } = props;

  const editor = usePlateEditorRef()!;

  return (
    <CustomElemParagraph {...attributes} className="custom-paragraph-element">
      {children}
    </CustomElemParagraph>
  );
};

export default ParagraphElement;
