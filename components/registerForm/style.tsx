import styled from "styled-components";
import nextImage from "next/image";
import { Form as GlobalForm } from "globalStyles/globalStyles";

export const Form = styled(GlobalForm)`
  padding: 2.5rem 3.5rem 2.5rem 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--primary-default);
  background-color: var(--primary-white);
  gap: 2rem;
`;

export const Logo = styled(nextImage)`
  width: 150px;
  height: 154px;
`;
