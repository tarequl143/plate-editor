import styled from "styled-components";

export const BalloonToolbarWrap = styled.div`
  position: absolute;
  left: -2000px;
  top: -2000px;
  z-index: 10;
  opacity: 0;
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
  padding: 8px;
  background-color: #ffffff;
  background-color: #ffffff;
  border-radius: 4px;
  box-shadow: 0px 2px 4px -2px rgba(16, 24, 40, 0.1),
    0px 4px 6px -1px rgba(16, 24, 40, 0.1);
  border: 1px solid #e5e7eb;
  > span {
    width: 24px;
    height: 24px;
    margin-right: 12px;
    color: #6b7280;
    &:last-child {
      margin-right: 0;
    }
    svg {
      width: auto;
      height: auto;
    }
  }
  span.slate-ToolbarButton-active {
    color: #4b4efc;
  }
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
  left: -2000px;
  top: -2000px;
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
  padding: 12px 16px;
  .slate-ToolbarButton {
    position: relative;
    width: 25%;
    padding: 8px 8px 8px 40px;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    box-sizing: border-box;
    height: auto;
    border-radius: 4px;
    &:hover {
      background-color: rgba(75, 78, 252, 0.1);
      color: #4b4efc;
      .title {
        color: #4b4efc;
      }
    }
    .icon {
      position: absolute;
      left: 8px;
      width: 24px;
      height: 24px;
      svg {
        width: auto;
        height: auto;
      }
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      color: #374151;
    }
  }
`;
