import React, { useCallback, useMemo } from "react";
import {
  HomeIcon,
  ResourcesIcon,
  HallOfFameIcon,
  PeopleIcon,
  CalendarIcon,
  LectureIcon,
} from "assets/Icons";
import {
  LinksContainer,
  NavLink,
  IconWrapper,
  LinkText,
  InsideWrapper,
} from "./style";
import { usePathname } from "next/navigation";

type IconProps = {
  stroke?: string;
};

type Link = {
  page: string;
  title: string;
  icon: React.ComponentType<IconProps>;
};

const links: Link[] = [
  { page: "/", title: "Home", icon: HomeIcon },
  { page: "/resources", title: "Resources", icon: ResourcesIcon },
  { page: "/halloffame", title: "Hall of Fame", icon: HallOfFameIcon },
  { page: "/people", title: "People", icon: PeopleIcon },
  { page: "/calendar", title: "Calendar", icon: CalendarIcon },
  { page: "/lecture", title: "Lecture", icon: LectureIcon },
];

export default function NavOptions({
  open = true,
  onNavItemClick,
}: {
  open?: boolean;
  onNavItemClick?: () => void;
}) {
  const pathname = usePathname();

  const isLinkSelected = useCallback(
    (pathName: string, linkPath: string): boolean => {
      if (linkPath === "/") {
        return pathName === "/" || pathName === "";
      }
      return pathName.startsWith(linkPath);
    },
    []
  );

  return (
    <LinksContainer $isOpen={open}>
      {links.map((link) => (
        <Option
          key={link.page}
          Icon={link.icon}
          title={link.title}
          selected={isLinkSelected(pathname, link.page)}
          open={open}
          href={link.page}
          onClick={onNavItemClick}
        />
      ))}
    </LinksContainer>
  );
}

const Option = React.memo(
  ({
    Icon,
    title,
    selected,
    open,
    href,
    onClick,
  }: {
    Icon: React.ComponentType<IconProps>;
    title: string;
    selected: boolean;
    open: boolean;
    href: string;
    onClick?: () => void;
  }) => {
    const iconColor = selected
      ? "var(--primary-default)"
      : "var(--secondary-light-300)";

    const handleClick = (e: React.MouseEvent) => {
      if (onClick) {
        onClick();
      }
    };

    return (
      <NavLink
        href={href}
        $isSelected={selected}
        prefetch
        onClick={handleClick}
      >
        <IconWrapper layout>
          <Icon stroke={iconColor} />
        </IconWrapper>
        {open && (
          <LinkText
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </LinkText>
        )}
      </NavLink>
    );
  }
);

Option.displayName = "Option";
