"use client";
import { motion } from "framer-motion";
import styled from "styled-components";

const breakpoint = "768px";

export const LayoutGrid = styled(motion.div)`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-areas: "hamburger" "main";
  width: 100%;
  height: 100dvh;
  grid-auto-rows: min-content;

  @media (min-width: ${breakpoint}) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "sidebar header"
      "sidebar main";
  }
`;

export const SidebarContainer = styled(motion.div)`
  max-height: 100dvh;
  width: fit-content;
  grid-area: sidebar;
  display: none;
  background-color: var(--primary-light-grey);

  @media (min-width: ${breakpoint}) {
    display: block;
  }
`;

export const Main = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: var(--primary-light-grey);
  grid-area: main;
`;

export const HeaderContainer = styled(motion.div)`
  width: 100%;
  height: 6.25rem;
  background-color: var(--primary-light-grey);
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  grid-area: header;

  @media (min-width: ${breakpoint}) {
    display: flex;
  }
`;
