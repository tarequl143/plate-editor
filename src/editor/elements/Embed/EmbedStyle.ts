import styled from "styled-components";
import { X } from "phosphor-react";

export const EmbedWrapper = styled.div`
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0px 8px 10px -6px rgba(16, 24, 40, 0.1),
    0px 20px 25px -2px rgba(16, 24, 40, 0.1);
  margin: 16px 0px;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  & h2 {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 8px;
  }
  & p {
    font-size: 14px;
    font-weight: 400;
    color: #6b7280;
  }
`;

export const UrlForm = styled.form``;

export const UrlInput = styled.input`
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  padding: 10px 12px;
  border: 1px solid #e5e7eb;
  width: 100%;
  border-radius: 6px;
  color: #9ca3af;
  font-size: 14px;
`;

export const UrlSubmitButton = styled.button`
  display: block;
  background-color: #1e22fb;
  color: white;
  border: none;
  font-size: 16px;
  padding: 12px 24px;
  border-radius: 8px;
  margin-left: auto;
  margin-top: 24px;
  cursor: pointer;
  &:disabled {
    opacity: 0.4;
  }
`;

export const CloseButton = styled(X)`
  padding: 8px;
  border-radius: 6px;
  background: #f9fafb;
  color: #6b7280;
  font-size: 18px;
  font-weight: 800;
  cursor: pointer;
`;
