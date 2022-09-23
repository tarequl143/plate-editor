import styled from "styled-components";

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
`;

export const CheckboxWrapper = styled.span`
  position: absolute;
  width: 20px;
  height: 20px;
  display: inline-block;
  left: 0;
  top: 3px;
  color: #d1d5db;
  svg {
    position: absolute;
    left: 0;
    top: calc(50% - 1px);
    transform: translateY(-50%);
  }
  .checked {
    color: #4b4efc;
  }
`;
