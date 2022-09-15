import { PlateRenderElementProps } from "@udecode/plate";
import { useFocused, useSelected } from "slate-react";
import { EmbedDataWrapper } from "./EmbedDataElementStyle";

type Props = {};

const EmbedDataElement = (props: PlateRenderElementProps) => {
  const { attributes, children, element, editor } = props;
  const focuseed = useFocused();
  const selected = useSelected();
  const embedUrl = (element.url as string) || "";
  return (
    <EmbedDataWrapper
      {...attributes}
      contentEditable={false}
      focused={focuseed && selected}
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
