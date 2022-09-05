/* eslint-disable no-prototype-builtins */
import { PlateRenderLeafProps } from "@udecode/plate";
import { DefaultLeaf } from "slate-react";

export const LeafRenderer = ({
  leaf,
  attributes,
  children,
  ...otherProps
}: PlateRenderLeafProps) => {
  if (leaf.hasOwnProperty("bold") && (leaf as any).bold) {
    children = <strong {...attributes}>{children}</strong>;
  }
  if (leaf.hasOwnProperty("italic") && (leaf as any).italic) {
    children = <em {...attributes}>{children}</em>;
  }
  if (leaf.hasOwnProperty("underline") && (leaf as any).underline) {
    children = <u {...attributes}>{children}</u>;
  }
  if (leaf.hasOwnProperty("code") && (leaf as any).code) {
    children = <code {...attributes}>{children}</code>;
  }
  if (leaf.hasOwnProperty("highlight") && (leaf as any).highlight) {
    children = <mark {...attributes}>{children}</mark>;
  }
  if (leaf.hasOwnProperty("strikethrough") && (leaf as any).strikethrough) {
    children = <del {...attributes}>{children}</del>;
  }
  if (leaf.hasOwnProperty("superscript") && (leaf as any).superscript) {
    children = <sup {...attributes}>{children}</sup>;
  }
  if (leaf.hasOwnProperty("subscript") && (leaf as any).subscript) {
    children = <sub {...attributes}>{children}</sub>;
  }
  if (leaf.hasOwnProperty("highlighted") && (leaf as any).highlighted) {
    children = (
      <span {...attributes} style={{ background: "#a9f4be" }}>
        {children}
      </span>
    );
  }
  if (
    leaf.hasOwnProperty("placeholder") &&
    (leaf as any).placeholder &&
    children?.props?.parent?.type === "p" &&
    children?.props?.parent?.children?.length < 2 &&
    children?.props?.parent?.children?.[0]?.text === ""
  ) {
    return (
      <>
        <DefaultLeaf leaf={leaf} attributes={attributes} {...otherProps}>
          {children}
        </DefaultLeaf>
        <span
          className="placeholder"
          style={{
            opacity: 0.3,
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            fontWeight: 300,
          }}
          contentEditable={false}
          {...attributes}
        >
          Type / to browse options
        </span>
      </>
    );
  }

  return (
    <DefaultLeaf leaf={leaf} attributes={attributes} {...otherProps}>
      {children}
    </DefaultLeaf>
  );
};
