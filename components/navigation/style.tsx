"use client";
import Link from "next/link";
import styled from "styled-components";

const breakpoint = "1191px";

export const NavbarButton = styled(Link)`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 18px;
  padding: 10px;
  text-decoration: none;

  &:hover {
    background-color: var(--primary-default);
    color: var(--primary-white);
  }
`;

export const DesktopNavbarButton = styled(NavbarButton)`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  @media (min-width: ${breakpoint}) {
    display: flex;
    font-size: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

export const DesktopNav = styled(Nav)`
  display: none;
  @media (min-width: ${breakpoint}) {
    flex-direction: column;
    justify-content: center;
    display: flex;
    gap: 12px;
  }
`;

export const MobileNav = styled(Nav)`
  display: flex;
  border: solid 1px var(--primary-default);
  box-sizing: border-box;
  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;

export const OpenTrayButton = styled.button<{ $opened?: boolean }>`
  width: 100%;
  padding: 10px;
  background-color: var(--primary-white);

  ${(props) =>
    props.$opened
      ? `
  border: none;
  background-color: var(--primary-default);
  color: var(--primary-white);
  border-radius: 0;
  &:hover {
    background-color: var(--primary-light-blue);
  }
`
      : `
  border: none;
  background-color: var(--primary-white);
  color: var(--theme-module3-100);
  border-radius: 8px;
  &:hover {
    background-color: var(--primary-light-grey);
  }
`}

  @media (min-width: ${breakpoint}) {
    display: none;
  }
`;
