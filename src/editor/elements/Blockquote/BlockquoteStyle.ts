import styled from "styled-components";

export const ElementWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
  padding: 5px 20px 5px 16px;
  color: #aaaaaa;
  font-size: 15px;
  display: block;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 5px;
    height: 100%;
    background-color: #eeeeee;
  }
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;
