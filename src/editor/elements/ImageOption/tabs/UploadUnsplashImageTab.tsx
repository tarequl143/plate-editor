import { TextInput } from "@getonnet/tixio-ui-core";
import { MagnifyingGlass } from "phosphor-react";

import { useEffect, useState } from "react";
import { useUnsplash } from "../hooks/useUnsplash";
import {
  UnsplashImageTabContainer,
  UnsplashImgCaption,
  UnsplashImgContainer,
  UnsplashImgContainerCaption,
  UnsplashImgListContainer,
  UnsplashImgThumbContainer,
} from "../modal/ImageOptionModalStyle";

const UploadUnsplashImageTab = ({
  insertImage,
}: {
  insertImage: CallableFunction;
}) => {
  // local states
  const [keyword, setKeyword] = useState<string>("");

  // hooks
  const { searchImages, images, isLoading } = useUnsplash();

  const handleImageSelect = (url: string) => {
    console.log("insert unspalsh", insertImage);
    insertImage?.(url);
  };

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setKeyword(value);
    await searchImages(value);
  };

  useEffect(() => {
    setKeyword("");
  }, []);

  return (
    <UnsplashImageTabContainer>
      {/* // TODO add search functionality */}
      {/* <UnsplashImgSearchInput placeholder="Search for an image..." onChange={handleSearch} value={keyword} /> */}
      <TextInput
        placeholder="Search for picture"
        icon={<MagnifyingGlass size={24} />}
        size="lg"
      />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UnsplashImgListContainer>
          {images.length ? (
            images.map((image) => (
              <UnsplashImgContainer key={image.id}>
                <UnsplashImgThumbContainer>
                  <img
                    src={image.urls.thumb}
                    alt={image.alt_description}
                    onClick={() => handleImageSelect(image.urls.full)}
                  />
                </UnsplashImgThumbContainer>
                <UnsplashImgCaption>
                  by{" "}
                  <a
                    href={image.user.links.html}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {image.user.name}
                  </a>
                </UnsplashImgCaption>
              </UnsplashImgContainer>
            ))
          ) : (
            <UnsplashImgContainerCaption>
              No image found
            </UnsplashImgContainerCaption>
          )}
        </UnsplashImgListContainer>
      )}
    </UnsplashImageTabContainer>
  );
};

export default UploadUnsplashImageTab;
