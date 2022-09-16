import styled from "styled-components";

export const ExcalidrawModalWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;
`;

export const ExcalidrawModalOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ExcalidrawModalContent = styled.div`
  position: relative;
  width: calc(100% - 80px);
  height: calc(100% - 80px);
  margin: 40px;
  background-color: #ffffff;
  border-radius: 10px;
  > div {
    border-radius: 10px;
  }
  .App-menu .Stack section:first-child,
  .disable-zen-mode,
  .layer-ui__wrapper__github-corner,
  button.ToolIcon_type_button.ToolIcon.ToolIcon_size_m.Shape.ToolIcon_type_button--show,
  .ToolIcon_type_floating,
  .ToolIcon_lock,
  input[data-testid="image"] + .ToolIcon__icon,
  .buttonList button[aria-label="Create link"] {
    display: none !important;
  }
  .ToolIcon_type_radio:not(.ToolIcon_toggle_opaque):checked + .ToolIcon__icon,
  .ToolIcon_type_checkbox:not(.ToolIcon_toggle_opaque):checked
    + .ToolIcon__icon,
  .active,
  .buttonList label.active {
    background: red;
  }
  .FixedSideContainer_side_top {
    top: 10px !important;
    left: 10px !important;
    right: 10px !important;
  }
`;

export const ExcalidrawActionBar = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  z-index: 9;
`;
export const ButtonTooltip = styled.span`
  position: absolute;
  right: 0;
  top: calc(100% + 12px);
  background-color: #eeeeee;
  padding: 6px 12px;
  width: max-content;
  font-size: 14px;
  color: #ffffff;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s ease;
  opacity: 0;
  visibility: hidden;
  text-transform: capitalize;
  z-index: 100;
  &:before {
    position: absolute;
    content: "";
    right: 8px;
    border-bottom: 6px solid #eeeeee;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    bottom: 100%;
  }
`;

export const ExcalidrawActionBarItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 3px;
  background-color: red;
  color: #ffffff;
  cursor: pointer;
  flex-wrap: wrap;
  box-shadow: none;
  border: none;
  font-size: 16px;
  margin-left: 10px;
  position: relative;
  :hover {
    ${ButtonTooltip} {
      opacity: 1;
      visibility: visible;
    }
  }
`;
