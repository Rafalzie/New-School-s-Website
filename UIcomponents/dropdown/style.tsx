"use client";
import styled, { keyframes } from "styled-components";

const radius = "8px";
const minHeightSmall = "42px";
const minHeightLarge = "54px";
const maxHeight = "500px";
export const animationDuration = 0.2;
const breakPoint = "768px";

const fadeInSmall = keyframes`
  0% {
    max-height: ${minHeightSmall};
  }
  100% {
    max-height: ${maxHeight}; 
  }
`;

const fadeInLarge = keyframes`
  0% {
    max-height: ${minHeightLarge};
  }
  100% {
    max-height: ${maxHeight}; 
  }
`;

const fadeOutSmall = keyframes`
  0% {
    max-height: ${maxHeight};
  }
  100% {
    max-height: ${minHeightSmall};
  }
`;

const fadeOutLarge = keyframes`
  0% {
    max-height: ${maxHeight};
  }
  100% {
    max-height: ${minHeightLarge};
  }
`;

export const Container = styled.div`
  min-height: ${minHeightSmall};
  position: relative;
  width: 200px;
  height: auto;
  min-width: 200px;
  @media (min-width: ${breakPoint}) {
    // min-height: ${minHeightLarge};
  }
`;

export const DropDownContainer = styled.div<{
  $isOpen: boolean;
  $zIndex?: number;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: ${(props) => props.$zIndex ?? 2};
  top: 0;
  border-radius: ${radius};
  border: 1px solid var(--primary-default);
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.$isOpen ? maxHeight : minHeightSmall)};
  animation: ${(props) => (props.$isOpen ? fadeInSmall : fadeOutSmall)}
    ${animationDuration}s ease-in-out;

  @media (min-width: ${breakPoint}) {
    max-height: ${(props) => (props.$isOpen ? maxHeight : minHeightLarge)};
    animation: ${(props) => (props.$isOpen ? fadeInLarge : fadeOutLarge)}
      ${animationDuration}s ease-in-out;
  }
`;

export const Accordian = styled.div<{ $title?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 1rem;
  gap: 1rem;
  height: fit-content;
  color: ${(props) => (props.$title ? "white" : "black")};
  background-color: ${(props) =>
    props.$title ? "var(--primary-default)" : "white"};
  width: 100%;
`;

export const AccordianOptionContainer = styled(Accordian)`
  &:hover {
    background-color: var(--primary-default);
    color: white;
  }
`;
