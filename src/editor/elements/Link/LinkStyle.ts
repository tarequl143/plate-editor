import styled from 'styled-components';

export const HrefElem = styled.a`
  position: absolute;
  left: 0;
  top: 100%;
  position: absolute;
  z-index: 5;
  background-color: #ffffff;
  border-radius: 3px;
  transition: 0.3s ease 0s;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px 16px;
  opacity: 0;
  visibility: hidden;
  margin-top: 10px;
  font-size: 12px;
  cursor: pointer;
  font-weight: 600;
  color: #1668e3;
  line-height: 1;
  box-shadow: 0px 10px 30px rgba(56, 63, 69, 0.14);
  border: 1px solid rgba(56, 63, 69, 0.1);
`;
export const LinkElem = styled.span`
  color: #1668e3;
  position: relative;
  &:hover ${HrefElem} {
    margin-top: 0;
    opacity: 1;
    visibility: visible;
  }
`;
