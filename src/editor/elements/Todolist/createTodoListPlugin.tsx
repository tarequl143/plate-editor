import { createPluginFactory, onKeyDownToggleElement } from "@udecode/plate";
import TodoListElement from "./TodoListElement";
import { CUSTOM_ELEMENT_TODO_LIST } from "./types";

export const createTodoListPlugin = createPluginFactory({
  key: CUSTOM_ELEMENT_TODO_LIST,
  isElement: true,
  component: TodoListElement,
  handlers: {
    onKeyDown: onKeyDownToggleElement,
  },
});
