import styled from "styled-components";

export const SeparatorWrapper = styled.div<{ focused: boolean }>`
  padding: 12px 10px;
  background-color: ${(props) => (props.focused ? "#f1f1f1" : "transparent")};
  & hr {
    border-top: 1px solid ${(props) => (props.focused ? "red" : "#f1f1f1")};
    background-color: transparent;
    height: 0px;
  }
`;
