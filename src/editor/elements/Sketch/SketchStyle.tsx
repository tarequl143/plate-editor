import styled from "styled-components";

export const ElementWrapper = styled.div<{ isSelected: boolean }>`
  position: relative;
  border: ${(props) =>
    props.isSelected ? "2px dashed #f58967" : "1px dashed #d8dadf"};
  padding: 15px;
  color: #666666;
  font-size: 15px;
  margin-bottom: 16px;
  display: flex;
  border-radius: 3px;
  min-height: 180px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover > div {
    opacity: 1;
    visibility: visible;
  }
`;
export const SketchHelpContent = styled.div`
  display: inline-block;
  text-align: center;
  user-select: none;
`;
export const SketchContent = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: #acb1b9;
  line-height: 22px;
  margin: 0;
  user-select: none;
`;

export const SvgWrapper = styled.div`
  width: 100%;
  > svg {
    max-width: 100%;
    max-height: max-content;
  }
`;

export const SketchElementActions = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 10;
`;

export const ActionBtn = styled.button`
  width: 24px;
  height: 28px;
  background-color: #cccccc;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  color: #333333;
  margin: 0 0 0 5px;
  font-size: 15px;
  &:hover {
    background-color: red;
    color: #ffffff;
  }
`;
