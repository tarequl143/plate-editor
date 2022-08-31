import { RenderLeafFn, TEditableProps, Value } from "@udecode/plate";
import { LeafRenderer } from "./renderer/LeafRenderer";

export const editableProps: TEditableProps = {
  spellCheck: false,
  autoFocus: false,
  readOnly: false,
  placeholder: "Click here to start writing..",
  renderLeaf: LeafRenderer as RenderLeafFn<Value>,
};
