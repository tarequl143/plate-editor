import styled, { css } from "styled-components";

export const MentionUrlElem = styled.span`
  position: absolute;
  left: 50%;
  bottom: 100%;
  z-index: 5;
  background-color: #000000;
  border-radius: 4px;
  transition: 0.3s ease 0s;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 16px;
  opacity: 0;
  visibility: hidden;
  margin-bottom: 20px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  color: #ffffff;
  line-height: 1;
  width: max-content;
  transform: translateX(-50%);
  text-decoration: none;
  &:before {
    position: absolute;
    content: "";
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    border-top: 8px solid #000000;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }
  &:hover {
    color: #1668e3;
  }
`;
export const MentionElemIcon = styled.div`
  display: flex;
  width: 18px;
  height: 18px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-radius: 50%;
  font-size: 16px;
  line-height: 1;
  svg {
    max-width: 100%;
    max-height: 100%;
    transform: none !important;
  }
  margin-right: 4px;
`;
export const MentionElem = styled.span<{
  isSelected?: boolean;
  isHoverView?: boolean;
}>`
  color: #1668e3;
  background-color: #f1f6fe;
  padding: 0 4px;
  border-radius: 3px;
  transition: 0.2s ease;
  border: 1px solid ${(props) => (props.isSelected ? "#1668e3" : "transparent")};
  position: relative;
  display: inline-flex;
  align-items: baseline;
  margin-right: 4px;
  &:hover {
    background-color: #c6dbfd;
    ${MentionUrlElem} {
      margin-bottom: 6px;
      opacity: 1;
      visibility: visible;
    }
  }
  svg {
    font-size: 16px;
    transform: translateY(2px);
  }
  a {
    display: flex;
    align-items: center;
    pointer-events: ${(props) =>
      props.isHoverView ? "none!important" : "pointer"};
  }
`;

export const MentionDropdownItem = styled.div<{
  isActive?: boolean;
  hasSubtitle?: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  position: relative;
  padding: ${(props) =>
    props.hasSubtitle ? "5px 8px 5px 36px" : "8px 8px 8px 36px"};
  box-sizing: border-box;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.isActive ? "#f1f2f4" : "transparent")};
  &:hover {
    background-color: #f1f2f4;
  }
`;

export const ItemIcon = styled.div<{ hasSubtitle?: boolean }>`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  border-radius: 50%;
  left: 8px;
  top: ${(props) => (!props.hasSubtitle ? "50%" : "8px")};
  font-size: 16px;
  line-height: 1;
  ${(props) =>
    !props.hasSubtitle &&
    css`
      transform: translateY(-50%);
    `}
  > svg {
    max-width: 100%;
    max-height: 100%;
  }
`;
export const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  overflow: hidden;
`;

export const ItemIconInner = styled.span`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: aqua;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 1px;
  font-size: 10px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ItemInfo = styled.div`
  flex: 1;
  h6 {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    line-height: 1.5;
    color: #000000;
  }
  p {
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    margin: 0;
    color: #333333;
  }
`;
