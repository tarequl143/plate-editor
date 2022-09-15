import styled from "styled-components";

export const EmbedDataWrapper = styled.div<{ focused: boolean }>`
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.focused ? "blue" : "transparent")};
  padding: ${(props) => (props.focused ? "2px" : "0px")};
  margin: 10px 0px;
`;
