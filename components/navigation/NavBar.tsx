import { Dispatch, ReactNode, SetStateAction } from "react";
import { DesktopNavbar } from "./DesktopNav";
import { MobileNavbar } from "./MobileNav";
import {
  HomeIcon,
  ResourcesIcon,
  HallOfFameIcon,
  PeopleIcon,
  CalendarIcon,
  LectureIcon,
} from "assets/Icons";
import { IconType } from "react-icons";
import { motion } from "framer-motion";

type Link = { page: string; title: string; icon: ReactNode };
export type NavBarProps = { links: Link[] };

const links: Link[] = [
  { page: "/dashboard", title: "Home", icon: <HomeIcon /> },
  { page: "/resources", title: "Resources", icon: <ResourcesIcon /> },
  { page: "/halloffame", title: "Hall of Fame", icon: <HallOfFameIcon /> },
  { page: "/people", title: "People", icon: <PeopleIcon /> },
  { page: "/calendar", title: "Calendar", icon: <CalendarIcon /> },
  { page: "/lecture", title: "Lecture", icon: <LectureIcon /> },

  // { href: "/", label: "HOME" },
  // { page: "/guides", title: "GUIDES" },
  // { href: "/resources", label: "RESOURCES" },
  // { href: "/halloffame", label: "H O F" },
  // { page: "/people", title: "PEOPLE" },
  // { href: "/calendar", label: "CALENDAR" },
];

export const NavBar = () => {
  return (
    <>
      <DesktopNavbar links={links} />
      <MobileNavbar links={links} />
    </>
  );
};
