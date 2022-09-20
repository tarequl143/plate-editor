import { Modal, Tabs } from "@getonnet/tixio-ui-core";
import UploadImageByLinkTab from "../tabs/UploadImageByLinkTab";
import UploadImageTab from "../tabs/UploadImageTab";
import UploadUnsplashImageTab from "../tabs/UploadUnsplashImageTab";
import { ModalWrapper, TabContentWrapper } from "./ImageOptionModalStyle";

type Props = {
  opened: boolean;
  onCLose: (...arg: string[]) => any;
  insertImage: (url: string) => void;
};

const ImageOptionModal = ({ opened, onCLose, insertImage }: Props) => {
  return (
    <Modal opened={opened} onClose={onCLose} centered title={"Add Image"}>
      <ModalWrapper>
        <Tabs variant="default">
          <Tabs.Tab label={"Upload"}>
            <TabContentWrapper>
              <UploadImageTab insertImage={insertImage} />
            </TabContentWrapper>
          </Tabs.Tab>
          <Tabs.Tab label={"Embed"}>
            <TabContentWrapper>
              <UploadImageByLinkTab insertImage={insertImage} />
            </TabContentWrapper>
          </Tabs.Tab>
          <Tabs.Tab label={"Unsplash"}>
            <TabContentWrapper>
              <UploadUnsplashImageTab insertImage={insertImage} />
            </TabContentWrapper>
          </Tabs.Tab>
        </Tabs>
      </ModalWrapper>
    </Modal>
  );
};

export default ImageOptionModal;
