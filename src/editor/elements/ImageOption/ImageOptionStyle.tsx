import styled from "styled-components";

export const ImageWrapper = styled.div<{ focused: boolean }>`
  padding: 30px 24px;
  background: #e5e7eb;
  border-radius: 4px;
  margin: 20px 0px;
  display: flex;
  justify-items: center;
  align-items: center;
  border-width: ${(props) => (props.focused ? "1px" : "0px")};
  border-color: blue;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LeftContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ImageLinkInput = styled.input`
  padding: 10;
  background: #eeeeee;
  font-size: 20;
  margin: auto;
`;
