import styled, { css } from "styled-components";
import { HeadingType } from "./HeadingElement";

export const Heading = styled.h1<{ type: HeadingType }>`
  color: #000000;
  margin-bottom: 16px;
  line-height: 1;
  ${(props) => {
    switch (props.type) {
      case "h1": {
        return css`
          font-weight: 34px;
          font-weight: 800;
          line-height: 51.68px;
        `;
      }
      case "h2": {
        return css`
          font-weight: 26px;
          font-weight: 600;
          line-height: 39.52px;
        `;
      }
      case "h3": {
        return css`
          font-weight: 20px;
          font-weight: 600;
          line-height: 30px;
        `;
      }
      default:
        return "";
    }
  }}
`;
