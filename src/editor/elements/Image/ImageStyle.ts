import styled from "styled-components";

export const Imgwrapper = styled.div<{ focused: boolean }>`
  width: max-content;
  border-radius: 5px;
  padding: 2px;
  border: ${(props) => (props.focused ? "2px dashed #4B4EFC" : "none")};
`;

export const Img = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 6px;
`;
