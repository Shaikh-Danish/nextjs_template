import React from "react";

import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header
      role="heading"
      aria-level={1}
      data-testid="mock-header"
      className="flex items-center px-2 py-3"
    >
      <div className="flex items-center w-full"></div>

      <div>
        <ThemeToggle />
      </div>
    </header>
  );
}

export default Header;
