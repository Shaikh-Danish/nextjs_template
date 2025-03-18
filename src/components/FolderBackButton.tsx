import React from "react";

import { ChevronLeft } from "lucide-react";
import { ROOT_PATH } from "@/lib/constants";

interface Props {
  path?: string;
}

function FolderBackButton({ path }: Props) {
  const isRootFolder = path === ROOT_PATH;

  return (
    <button
      // onClick={handleBack}
      disabled={isRootFolder}
      className={`p-2 rounded-full mr-2 ${
        isRootFolder
          ? "text-gray-300 cursor-not-allowed"
          : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
      }`}
      aria-label="Go back"
      role="button"
    >
      <ChevronLeft size={20} />
    </button>
  );
}

export default React.memo(FolderBackButton);
