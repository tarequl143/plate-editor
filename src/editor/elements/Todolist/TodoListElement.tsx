import { Checkbox } from "@getonnet/tixio-ui-core";
import { findNodePath, setNodes, usePlateEditorRef } from "@udecode/plate";
import { useFocused, useReadOnly, useSelected } from "slate-react";
import { ElementWrapper } from "./TodoListStyle";

const TodoListElement = (props: any) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const focused = useFocused();
  const selected = useSelected();
  const readOnly = useReadOnly();

  const { checked } = element;

  const toggleCheckbox = (event: any) => {
    if (!editor || readOnly) return;

    const path = findNodePath(editor, element);
    const newProperties: any = {
      checked: event.target.checked,
    };
    setNodes(editor, newProperties, { at: path });
  };

  return (
    <ElementWrapper
      {...attributes}
      className={`checklist-element ${selected && focused ? "selected" : ""}`}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox} label={children} />
    </ElementWrapper>
  );
};

export default TodoListElement;
