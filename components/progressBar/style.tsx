import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 17.5rem;
  background-color: #c7d7fe;
  border-radius: 5px;
  position: relative;
  height: 8px;
`;

export const Progress = styled.div<{ progress: number }>`
  width: ${({ progress }) => progress}%;
  height: 100%;
  background-color: var(--primary-default);
  border-radius: 8px;
  transition: width 0.3s ease-in-out;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: -6px;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
`;
