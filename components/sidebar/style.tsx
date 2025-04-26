import { motion } from "framer-motion";

import styled from "styled-components";

export const SidebarContainer = styled(motion.div)`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
`;

interface OpenProps {
  $isOpen: boolean;
}

export const Nav = styled(motion.nav)<OpenProps>`
  border-radius: 0.75rem;
  border: 1px solid var(--primary-border);
  background-color: var(--primary-white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0.5rem;
  width: ${(props) => (props.$isOpen ? "300px" : "fit-content")};
  height: calc(100vh - 30px);
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 1rem;
`;

export const TitleContainer = styled.div<OpenProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) => (props.$isOpen ? "flex-end" : "center")};
  padding-right: ${(props) => (props.$isOpen ? "1rem" : 0)};
`;

export const SidebarButton = styled(motion.button)`
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;

  &:hover svg path {
    stroke: var(--primary-default);
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled(motion.div)``;

export const LogoPlaceholder = styled.div`
  height: 100px;
`;

interface SelectedProps {
  $isSelected: boolean;
}

export const DarkModeContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 1.5rem;

  @media (max-width: 768px) {
    align-self: end;
    margin-top: 100px;
  }
`;

export const MultiToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 16px;
  color: var(--secondary-light-300);
`;

export const ToDoButton = styled.button`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--secondary-light-300);
  border-radius: 12px;
  padding: 12px;
  background: transparent;
  cursor: pointer;
`;

export const ModuleText = styled.span`
  font-size: 12px;
  color: var(--secondary-light-300);
`;

export const GuideText = styled.span`
  font-size: 16px;
  color: var(--secondary-light-300);
  text-align: left;
`;
