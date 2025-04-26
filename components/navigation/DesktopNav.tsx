import Link from "next/link";
import { NavBarProps } from "./NavBar";
import { DesktopNav, DesktopNavbarButton } from "./style";

export const DesktopNavbar = ({ links }: NavBarProps) => {
  const buttons = links.map((link, index) => {
    return (
      <>
        <DesktopNavbarButton key={index} href={link.page}>
          {link.icon}
          {link.title}
        </DesktopNavbarButton>
      </>
    );
  });
  return <DesktopNav>{buttons}</DesktopNav>;
};
