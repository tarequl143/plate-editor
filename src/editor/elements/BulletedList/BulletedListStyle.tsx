import styled from 'styled-components';

export const ElementWrapper = styled.div`
  margin: 8px 0;
`;

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0 0 0 16px;
  list-style-type: none;
  li {
    &:before {
      position: absolute;
      content: '';
      left: 0;
      top: 12px;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: #000000;
    }
  }
`;
