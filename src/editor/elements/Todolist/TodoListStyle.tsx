import styled from "styled-components";

export const ElementWrapper = styled.div`
  margin: 0;
  position: relative;
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
