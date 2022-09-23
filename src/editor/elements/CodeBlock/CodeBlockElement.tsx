import { Box } from "@getonnet/tixio-ui-core";
import { PlateRenderElementProps } from "@udecode/plate";
import { Copy } from "phosphor-react";
import { useFocused, useSelected } from "slate-react";
import { CodeBlockWrapper } from "./styles";

const CodeBlockElement = (props: PlateRenderElementProps) => {
  const { attributes } = props;
  const selected = useSelected();
  const focused = useFocused();

  const handleCopy = () => {
    window.navigator.clipboard.writeText(
      (props.element.children[0].text as string) || ""
    );
  };

  return (
    <CodeBlockWrapper
      {...attributes}
      className={`code-element ${selected && focused ? "selected" : ""}`}
    >
      <Box
        sx={{
          position: "absolute",
          right: 4,
          top: 4,
          cursor: "pointer",
        }}
      >
        <Copy size={18} weight="duotone" onClick={handleCopy} />
      </Box>

      {props.children}
    </CodeBlockWrapper>
  );
};

export default CodeBlockElement;
