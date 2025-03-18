import React from "react";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "@/app/page";

describe("Home Page", () => {
  it("renders header with root path", () => {
    render(<Home />);

    const header = screen.getByTestId("mock-header");
    expect(header).toBeInTheDocument();
  });

  it("renders main content area with correct styling", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toHaveClass("flex-1 h-full overflow-y-scroll bg-white px-2 py-3");
  });
});
