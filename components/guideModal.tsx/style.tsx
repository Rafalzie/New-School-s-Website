import { StyleColors } from "globalStyles/colors";
import { Wrapper } from "globalStyles/globalStyles";
import styled from "styled-components";

const BREAKPOINT = "680px";

export const ColouredCircle = styled.div<{ $backgroundColor?: StyleColors }>`
  border-radius: 50%;
  ${(props) => `background-color: ${props.$backgroundColor};`}

  width: clamp(0.75rem, 0.75rem, 1rem);
  height: 12px;
`;

export const GuideModalWrapper = styled(Wrapper)`
  gap: 1.5rem;
  max-width: 1200px;
  width: 100%;
`;

export const ReturnStatusContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TitleContainer = styled(Wrapper)`
  width: 100%;
  justify-content: start;
`;

export const Header = styled(Wrapper)`
  gap: 1.5rem;
  width: 100%;
  padding-bottom: 2rem;
  @media (min-width: ${BREAKPOINT}) {
    flex-direction: row;
  }
`;
