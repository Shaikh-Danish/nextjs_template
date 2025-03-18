import React from "react";

import { render, screen } from "@testing-library/react";

import FolderBackButton from "@/components/FolderBackButton";

import { ROOT_PATH } from "@/lib/constants";

// Add jest-dom imports
import "@testing-library/jest-dom";

describe("FolderBackButton", () => {
  it("renders enabled button when not in root path", () => {
    render(<FolderBackButton path="photos" />);
    const button = screen.getByRole("button");

    expect(button).toBeEnabled();
  });

  it("renders disabled button when path is root", () => {
    render(<FolderBackButton path={ROOT_PATH} />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toBeInTheDocument();
  });
});
