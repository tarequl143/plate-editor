import { Button, Text } from "@getonnet/tixio-ui-core";
import { Upload } from "phosphor-react";
import { useDropzone } from "react-dropzone";
import { UploadImageTabContainer } from "../modal/ImageOptionModalStyle";

const UploadImageTab = ({
  setUploading,
  insertImage,
}: {
  setUploading?: CallableFunction;
  insertImage?: CallableFunction;
}) => {
  // TODO uncomment
  // redux states
  // const { authUser: user } = useSelector((state: RootState) => state);
  // const { _id: wikiID } = useSelector((state: RootState) => state.activeWikiData);

  // const dispatch = useDispatch();

  // wiki image upload api call
  // TODO uncomment lines
  const wikiImageUpload = async (file: File) => {
    try {
      // setUploading(true);
      const formData = new FormData();
      formData.set("image", file);
      // const result = await axios().post(`/wikis/upload-wiki-image/${user.workspaceInfo._id}/${wikiID}`, formData);
      // if (result.status === 201) {
      insertImage?.(
        "https://images.unsplash.com/photo-1663550910430-a0ff71ad1969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ); // TODO remove dummy image
      // setUploading(false);
      // }
    } catch (error) {
      // dispatch(notificationError('Image upload failed'));
      // setUploading(false);
    }
  };

  // configuring dropzone
  const { getInputProps, getRootProps, open } = useDropzone({
    accept: "image/jpeg, image/png, image/jpeg",
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles, filesRejection) => {
      if (filesRejection.length) {
        // dispatch(notificationError('File format is not supported'));

        return;
      }
      if (acceptedFiles[0].size > 5 * 1024 * 1024) {
        // TODO uncomment
        // dispatch(notificationError('Uploaded image size is greater than 5 MB'));
        return;
      }

      // wikiImageUpload(acceptedFiles[0]); //upload image //TODO uncomment this
      insertImage?.(
        "https://images.unsplash.com/photo-1663550910430-a0ff71ad1969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
      ); // TODO remove dummy insertion
    },
  });

  return (
    <UploadImageTabContainer {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <div>
        <Upload size={48} />
      </div>
      <Text color="#9CA3AF" mt={20}>
        Drag & drop a image here <span>OR</span>
        <Button onClick={open} variant="subtle">
          Upload
        </Button>
      </Text>
    </UploadImageTabContainer>
  );
};

export default UploadImageTab;
