import { findNodePath, setNodes, usePlateEditorRef } from "@udecode/plate";
import { useFocused, useReadOnly, useSelected } from "slate-react";
import { Checkbox, CheckboxWrapper, ElementWrapper } from "./TodoListStyle";

const TodoListElement = (props: any) => {
  const editor = usePlateEditorRef()!;
  const { attributes, children, element } = props;
  const focused = useFocused();
  const selected = useSelected();
  const readOnly = useReadOnly();

  const { checked } = element;

  return (
    <ElementWrapper
      {...attributes}
      className={`checklist-element ${selected && focused ? "selected" : ""}`}
    >
      <CheckboxWrapper contentEditable={false} suppressContentEditableWarning>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => {
            if (!editor || readOnly) return;

            const path = findNodePath(editor, element);
            const newProperties: any = {
              checked: event.target.checked,
            };
            setNodes(editor, newProperties, { at: path });
          }}
        />
        <Checkbox />
      </CheckboxWrapper>
      <span contentEditable={!readOnly} suppressContentEditableWarning>
        {children}
      </span>
    </ElementWrapper>
  );
};

export default TodoListElement;
