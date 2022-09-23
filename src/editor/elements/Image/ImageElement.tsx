import { PlateRenderElementProps } from "@udecode/plate";
import { useFocused, useSelected } from "slate-react";
import { Img, Imgwrapper } from "./ImageStyle";

const ImageElement = (props: PlateRenderElementProps) => {
  const selected = useSelected();
  const focused = useFocused();

  console.log("Image Props", props);

  return (
    <Imgwrapper
      {...props.attributes}
      focused={selected && focused}
      contentEditable={false}
      suppressContentEditableWarning
      className={`image-element ${selected && focused ? "selected" : ""}`}
    >
      {props.children}
      <Img src={(props.element.url as string) || ""} />
    </Imgwrapper>
  );
};

export default ImageElement;
