import {
  getPlateEditorRef,
  RenderLeafFn,
  TEditableProps,
  Value,
} from "@udecode/plate";
import { CustomAutoFormatRules } from "./customAutoFormatRules/CustomAutoFormatRules";
import { LeafRenderer } from "./renderer/LeafRenderer";

const onKeyDown = (event: any) => {
  const editor = getPlateEditorRef();
  CustomAutoFormatRules(editor, event);
};

export const editableProps: TEditableProps = {
  spellCheck: false,
  autoFocus: false,
  readOnly: false,
  onKeyDown,
  placeholder: "Click here to start writing..",
  renderLeaf: LeafRenderer as RenderLeafFn<Value>,
};
