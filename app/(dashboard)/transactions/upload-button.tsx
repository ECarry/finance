import { Button } from "@/components/ui/button";
import { UploadIcon } from "lucide-react";
import { skip } from "node:test";
import { useCSVReader } from "react-papaparse";

type Props = {
  onUpload: (result: any) => void;
};

const UploadButton = ({ onUpload }: Props) => {
  const { CSVReader } = useCSVReader();

  return (
    <CSVReader
      onUploadAccepted={onUpload}
      config={{
        skipEmptyLines: true,
      }}
    >
      {({ getRootProps }: any) => (
        <Button
          type="button"
          size="sm"
          className="w-full lg:w-auto"
          {...getRootProps()}
        >
          <UploadIcon className="size-4 mr-2" /> Import
        </Button>
      )}
    </CSVReader>
  );
};

export default UploadButton;
