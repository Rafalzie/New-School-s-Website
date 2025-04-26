"use client";
import { useState } from "react";
import { NavbarButton, MobileNav, OpenTrayButton } from "./style";
import { NavBarProps } from "./NavBar";

export const MobileNavbar = ({ links }: NavBarProps) => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const handleOpenNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const buttons = links.map((link, index) => {
    return (
      <NavbarButton key={index} href={link.page}>
        {link.title}
      </NavbarButton>
    );
  });

  return isNavOpen ? (
    <MobileNav>
      <OpenTrayButton onClick={handleOpenNav} $opened>
        CLOSE NAVIGATION
      </OpenTrayButton>
      {buttons}
    </MobileNav>
  ) : (
    <MobileNav>
      <OpenTrayButton onClick={handleOpenNav}>OPEN NAVIGATION</OpenTrayButton>
    </MobileNav>
  );
};
