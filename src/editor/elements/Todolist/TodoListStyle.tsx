import styled from "styled-components";

export const Checkbox = styled.span`
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 2px solid #cccccc;
  border-radius: 3;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  box-sizing: content-box;
  &:after {
    position: absolute;
    content: "";
    left: 3px;
    top: 0px;
    width: 6px;
    height: 10px;
    opacity: 0;
    transform: rotate(45deg);
    border-right: 2px solid #ffffff;
    border-bottom: 2px solid #ffffff;
  }
`;

export const ElementWrapper = styled.div`
  margin: 0;
  position: relative;
  padding: 0 0 0 30px;
  color: #1f2937;
  line-height: 21.56px;
  font-size: 14px;
  margin-bottom: 8px;
  input[type="checkbox"] {
    appearance: none;
    -webkit-appearance: none;
    width: 100%;
    height: 100%;
    margin: 0;
    position: relative;
    z-index: 1;
    border-color: #d1d5db;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  input[type="checkbox"]:checked + ${Checkbox} {
    border-color: #4b4efc;
    background-color: #4b4efc;
    &:after {
      opacity: 1;
    }
  }
`;

export const CheckboxWrapper = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: inline-block;
  left: 0;
  top: 3px;
  color: red;
`;
