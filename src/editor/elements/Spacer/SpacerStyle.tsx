import styled, { css } from "styled-components";
import { Copy, Trash } from "phosphor-react";

export const SpacerWrapper = styled.div<{ focused: boolean }>`
  height: 32px;
  padding: 0px 10px;
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: ${(props) => (props.focused ? "#f7f7f7" : "transparent")};
  gap: 8px;
  &:hover {
    background-color: #f7f7f7;
  }
`;

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
