import styled from "styled-components";

export const BalloonToolbarWrap = styled.div`
  position: absolute;
  left: -2000px;
  top: -2000px;
  z-index: 10;
  opacity: 0;
  background-color: #ffffff;
  box-shadow: 0px 10px 30px rgba(56, 63, 69, 0.14);
  border: 1px solid rgba(56, 63, 69, 0.1);
  border-radius: 6px;
  transition: opacity 0.75s ease 0s, border 0.3s ease;
  box-sizing: border-box;
  width: max-content;
`;

export const BaloonToolbarContent = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const SlashToolbarWrap = styled.div`
  display: flex;
  background-color: #ffffff;
  min-height: 30px;
  position: absolute;
  z-index: 10;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  opacity: 0;
  box-shadow: 0px 10px 30px rgba(56, 63, 69, 0.06);
  border: 1px solid rgba(56, 63, 69, 0.1);
  border-radius: 5px;
  transition: opacity 0.75s ease 0s, border 0.3s ease;
`;

export const SlashToolbarContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  z-index: 9;
  margin: 0;
  vertical-align: middle;
  padding: 4px;
`;
