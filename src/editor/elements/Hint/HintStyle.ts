import styled from "styled-components";

export const ElementWrapper = styled.div`
  position: relative;
  padding: 16px 15px 16px 44px;
  background-color: #fffbeb;
  color: #666666;
  font-size: 16px;
  margin-bottom: 16px;
  display: block;
  border-radius: 3px;
  line-height: 26.24px;
  font-weight: 500;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #f59e0b;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;

export const HintIcon = styled.span`
  position: absolute;
  left: 20px;
  top: 16px;
  font-size: 18px;
  color: #f58967;
  display: inline-block;
  line-height: 30px;
`;
