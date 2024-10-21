import React from "react";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div>
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Header;
