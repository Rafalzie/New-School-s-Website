import styled from "styled-components";

import { Form as GlobalForm } from "globalStyles/globalStyles";

export const Form = styled(GlobalForm)`
  padding: 2.5rem 3.5rem 2.5rem 3.5rem;
  border-radius: 0.5rem;
  border: 1px solid var(--secondary-dark);
  background-color: var(--primary-light-grey);
  gap: 2rem;
  background-color: var(--primary-light-grey);
`;

export const Logo = styled.div`
  width: 150px;
  height: 154px;
`;
