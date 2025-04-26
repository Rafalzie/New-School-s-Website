import styled from "styled-components";
import { Button } from "./buttons/default/style";
import { BREAKPOINT_DESKTOP } from "./globalConstants";
import Link from "next/link";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FullScreenWrapper = styled(Wrapper)`
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
`;

export const Border = styled(Wrapper)`
  border: 1px solid var(--theme-module3-100);
  border-radius: 0.5rem;
`;

export const MaterialButton = styled(Button)`
  text-align: left;
  padding: 0.5rem 0.75rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FlexibleWrapper = styled(Wrapper)`
  @media (min-width: ${BREAKPOINT_DESKTOP}) {
    flex-direction: row;
  }
`;

const Toast = styled.div`
  padding: 16px;
  top: 100px;
  position: absolute;
  border-radius: 8px;
  z-index: 1000;
`;

export const ErrorToast = styled(Toast)`
  background-color: var(--error-failure-10);
  border: 1px solid var(--error-failure-100);
  color: var(--primary-black-100);
`;

export const SuccessToast = styled(Toast)`
  background-color: var(--error-success-10);
  border: 1px solid var(--error-success-100);
  color: var(--primary-black-100);
`;

export const UnstyledLink = styled(Link)`
  text-decoration: none;
`;

export const UnstyledLinkNoWrap = styled(UnstyledLink)`
  white-space: nowrap;
`;
