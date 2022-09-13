import styled from 'styled-components';

export const ElementWrapper = styled.div`
  margin: 8px 0;
`;

export const UnorderedList = styled.ol`
  margin: 0;
  padding: 0 0 0 16px;
  list-style-type: none;
  counter-reset: ol-counter;
  li {
    counter-increment: ol-counter;
    &:before {
      position: absolute;
      content: counter(ol-counter) '.';
      left: 0;
      top: 0;
      line-height: 26px;
    }
  }
`;
