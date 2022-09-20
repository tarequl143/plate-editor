import styled from "styled-components";

export const ModalWrapper = styled.div``;

export const TabContentWrapper = styled.div`
  padding: 16px 0px;
`;

export const UploadImageTabContainer = styled.div`
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 238px;
`;

// unspash styles
export const UnsplashImageTabContainer = styled.div`
  text-align: center;
`;

export const UnsplashImgListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  text-align: left;
`;

export const UnsplashImgContainer = styled.div`
  height: 100%;
  width: 30%;
  padding: 5px;
`;

export const UnsplashImgThumbContainer = styled.div`
  border-radius: 3px;
  cursor: pointer;
  height: 140px;
  overflow: hidden;
  opacity: 0.5;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    img {
      transform: scale(1.1);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    user-drag: none;
    transition: all 2s ease;
  }
`;

export const UnsplashImgCaption = styled.p`
  margin: 0;
  font-size: 12px !important;

  a {
    text-decoration: underline;

    &:hover {
    }
  }
`;

export const UnsplashImgContainerCaption = styled.p`
  font-size: 1em;
  text-align: center;
  flex-basis: 100%;
`;
