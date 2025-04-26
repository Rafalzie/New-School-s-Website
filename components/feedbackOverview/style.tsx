"use client";
import { FlexibleWrapper, Wrapper } from "globalStyles/globalStyles";
import styled from "styled-components";

export const FeedbackContainer = styled(Wrapper)`
  justify-content: center;
  gap: 2rem;
`;

export const FeedbackInfoContainer = styled(FlexibleWrapper)`
  gap: 2rem;
`;

export const ContentAndNavigatorContainer = styled(Wrapper)`
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const CommentWrapper = styled(Wrapper)`
  height: 10rem;
  padding: 1rem;
  overflow-y: auto;
`;

export const FeedbackContentWrapper = styled(Wrapper)`
  width: 100%;
`;
