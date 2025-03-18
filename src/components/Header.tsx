import React from "react";
import FolderBackButton from "./FolderBackButton";

function Header({ path }: { path: string }) {
  const currentPath = path.split("/").at(-1) as string;

  return (
    <header
      role="heading"
      aria-level={1}
      data-testid="mock-header"
      className="flex items-center px-2 py-3 bg-white shadow-sm border-b border-gray-200"
    >
      <div className="flex items-center w-full">
        <FolderBackButton path={currentPath} />
      </div>
    </header>
  );
}

export default Header;
