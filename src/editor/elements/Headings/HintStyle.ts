import styled from "styled-components";

const fontSizes = {
  h1: "36px",
  h2: "32px",
  h3: "28px",
  h4: "24px",
};
type FontSizes = keyof typeof fontSizes;

export const Heading = styled.h1<{ type: string }>`
  font-size: ${(props) =>
    fontSizes[props.type as FontSizes] ||
    "36px"}; // return size depending on the element type
  color: #000000;
  margin: 10px 0 20px 0;
  line-height: 1;
`;
