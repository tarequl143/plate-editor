import { Button, Text, TextInput } from "@getonnet/tixio-ui-core";
import { useState } from "react";

// Image link component
const UploadImageByLinkTab = ({
  insertImage,
}: {
  insertImage?: CallableFunction;
}) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [isValid, setValidStatus] = useState<boolean>(false);

  const handleInput = () => {
    if (!value) {
      return;
    }

    // TODO add validation
    // if (!Utils.isValidUrl(value) && !value.startsWith('data:image/')) {
    //   setError('Please provide a valid link');
    //   setValidStatus(false);
    // } else {
    insertImage?.(value);
    // }
  };

  return (
    <div>
      <Text color="#6B7280">Paste image link to add to document</Text>
      <TextInput
        placeholder="Image link only"
        size="lg"
        type="url"
        onChange={(e) => setValue(e.target.value)}
        my={20}
      />
      <Button
        ml="auto"
        mt={24}
        size="md"
        px={36}
        sx={{ display: "block" }}
        disabled={!value.length}
        onClick={handleInput}
      >
        Add
      </Button>
    </div>
  );
};

export default UploadImageByLinkTab;
