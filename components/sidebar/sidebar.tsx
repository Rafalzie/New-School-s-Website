"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { SidebarIcon, VefskolinnLogo } from "assets/Icons";
import { useRouter } from "next/navigation";
import { DarkModeToggle } from "components/darkmode/darkmode";
import {
  Nav,
  ContentContainer,
  DarkModeContainer,
  LogoContainer,
  LogoPlaceholder,
  LogoWrapper,
  SidebarButton,
  SidebarContainer,
  TitleContainer,
  ToDoContainer,
  Title,
  ToDoButton,
  ModuleText,
  GuideText,
  MultiToDoContainer,
} from "./style";
import NavOptions from "components/navOptions/NavOptions";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <SidebarContainer>
      <Nav layout $isOpen={open}>
        <ContentContainer>
          <SidebarToggle open={open} setOpen={setOpen} />
          <LogoSection open={open} />
          <NavOptions open={open} />
          <MultiToDoContainer>
            <ToDo
              title={"Today"}
              moduleNumber={4}
              guideNumber={3}
              description={"React props"}
              open={open}
              href="/guides/653a11abf57a20f9a5d911e6"
            />
            <ToDo
              title={"Tomorrow"}
              moduleNumber={4}
              guideNumber={4}
              description={"React state"}
              open={open}
              href="/guides/653a73397a41e11fa6e5423f"
            />
          </MultiToDoContainer>
        </ContentContainer>

        {open && (
          <DarkModeContainer>
            <DarkModeToggle />
          </DarkModeContainer>
        )}
      </Nav>
    </SidebarContainer>
  );
}

const LogoSection = ({ open }: { open: boolean }) => {
  return (
    <LogoContainer>
      {open ? (
        <LogoWrapper
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
        >
          <VefskolinnLogo
            width="100"
            height="100"
            color="var(--primary-default)"
          />
        </LogoWrapper>
      ) : (
        <LogoPlaceholder />
      )}
    </LogoContainer>
  );
};

const SidebarToggle = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <TitleContainer $isOpen={open}>
      <SidebarButton layout onClick={() => setOpen((pv) => !pv)}>
        <SidebarIcon />
      </SidebarButton>
    </TitleContainer>
  );
};

type ToDoProps = {
  title?: string;
  moduleNumber?: number;
  guideNumber?: number;
  description?: string;
  open: boolean;
  href: string;
};

const ToDo = ({
  title,
  moduleNumber,
  guideNumber,
  description,
  open,
  href,
}: ToDoProps) => {
  const router = useRouter();
  return (
    <>
      {open && (
        <ToDoContainer>
          <Title>{title}</Title>
          <ToDoButton onClick={() => router.push(href)}>
            <ModuleText>Module {moduleNumber}</ModuleText>
            <GuideText>
              Guide {guideNumber} - {description}
            </GuideText>
          </ToDoButton>
        </ToDoContainer>
      )}
    </>
  );
};
