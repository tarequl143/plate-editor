import { PlateRenderElementProps } from "@udecode/plate";
import { useFocused, useSelected } from "slate-react";
import { Img, Imgwrapper } from "./styles";

const ImageElement = (props: PlateRenderElementProps) => {
  const selected = useSelected();
  const focused = useFocused();

  return (
    <Imgwrapper
      focused={selected && focused}
      contentEditable={false}
      suppressContentEditableWarning
    >
      {props.children}
      <Img src={(props.element.url as string) || ""} />
    </Imgwrapper>
  );
};

export default ImageElement;
