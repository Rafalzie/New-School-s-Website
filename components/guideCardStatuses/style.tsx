"use client";

import { SmallText } from "globalStyles/text";
import styled from "styled-components";

export const StatusesWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: column;
  gap: 12px;
  width: 155px;
  flex: 1;
`;

export const Grade = styled(SmallText)`
  font-weight: bold;
`;

export const Status = styled.div`
  display: flex;
  gap: 12px;
`;

export const IconContainer = styled.div`
  height: 18px;
  width: 18px;
`;
