import styled from "styled-components";

export const ElementWrapper = styled.div`
  position: relative;
  /* border-left: 4px solid #f58967; */
  padding: 12px 15px 12px 36px;
  background-color: rgba(245, 137, 103, 0.1);
  color: #666666;
  font-size: 15px;
  margin: 8px 0;
  display: block;
  border-radius: 3px;
  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background-color: #f58967;
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
  left: 10px;
  top: 16px;
  font-size: 18px;
  color: #f58967;
  display: inline-block;
  line-height: 1;
`;
