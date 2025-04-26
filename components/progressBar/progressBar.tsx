import React from "react";
import { ProgressBarContainer, Progress, IconContainer } from "./style";
import { MarkIcon } from "../../assets/Icons";

interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <Progress progress={progress} />
      <IconContainer style={{ left: `${progress}%` }}>
        <MarkIcon />
      </IconContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
