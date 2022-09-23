import { PlateRenderElementProps } from "@udecode/plate";
import { useFocused, useSelected } from "slate-react";
import { EmbedDataWrapper } from "./EmbedDataElementStyle";

const EmbedDataElement = (props: PlateRenderElementProps) => {
  const { attributes, children, element } = props;
  const focused = useFocused();
  const selected = useSelected();
  const embedUrl = (element.url as string) || "";
  return (
    <EmbedDataWrapper
      {...attributes}
      contentEditable={false}
      focused={focused && selected}
      className={`embed-data-element ${selected && focused ? "selected" : ""}`}
    >
      {children}
      <iframe
        src={embedUrl}
        title="embeded element"
        frameBorder="0"
        allowFullScreen
        style={{
          width: "100%",
          height: `${embedUrl.includes("youtube.com") ? "360px" : "450px"}`,
        }}
      />
    </EmbedDataWrapper>
  );
};

export default EmbedDataElement;
