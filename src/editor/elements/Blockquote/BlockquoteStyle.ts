import styled from "styled-components";

export const ElementWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 5px 20px 5px 16px;
  color: #374151;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  /* background-color: #f5f5f5; */
  display: block;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #4b4efc;
  }
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;
