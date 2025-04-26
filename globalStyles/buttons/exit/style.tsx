import styled from "styled-components";
import Image from "next/image";

export const Button = styled.button`
  background-color: var(--secondary-dark);
  border: transparent;
  border-radius: 50%;
  font-size: 24px;
  width: 18px;
  height: 18px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
`;

export const ExitIcon = styled(Image)`
  width: 8px;
  height: 8px;
`;
