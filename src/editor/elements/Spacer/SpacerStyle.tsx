// import { css } from "@emotion/react";
// import styled from "@emotion/styled";
import { Copy, Trash } from "phosphor-react";
import styled, { css } from "styled-components";

const CommonStyle = css`
  color: gray;
  cursor: pointer;
`;

export const SpacerCloneIcon = styled(Copy)`
  ${CommonStyle}
  &:hover {
    color: #4b4efc;
  }
`;
export const SpacerDeleteIcon = styled(Trash)`
  ${CommonStyle}
  &:hover {
    color: red;
  }
`;

export const SpacerWrapper = styled.div<{ focused: boolean }>`
  height: 32px;
  padding: 0px 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${(props) => (props.focused ? "#f7f7f7" : "transparent")};
  border: 1px dashed ${(props) => (props.focused ? "#4B4EFC" : "transparent")};
  gap: 8px;
  &:hover {
    background-color: #f7f7f7;
    ${SpacerCloneIcon}, ${SpacerDeleteIcon} {
      opacity: 1;
      visibility: visible;
    }
  }
  ${SpacerCloneIcon}, ${SpacerDeleteIcon} {
    opacity: ${(props) => (props.focused ? 1 : 0)};
    visibility: ${(props) => (props.focused ? "visible" : "hidden")};
  }
`;
