import styled from "styled-components";

const BREAKPOINT = "680px";

export const Button = styled.button<{ $styletype: "default" | "outlined" }>`
  background-color: ${(props) =>
    props.$styletype === "default"
      ? "var(--primary-default)"
      : "var(--primary-default)"};
  border: ${(props) =>
    props.$styletype === "default"
      ? "1px solid var(--primary-default)"
      : "1px solid var(--primary-default)"};
  color: ${(props) =>
    props.$styletype === "default"
      ? "var(--primary-white)"
      : "var(--primary-white)"};
  border-radius: 8px;
  font-size: 12px;
  padding: 4px 12px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;

  &:hover {
    background-color: ${(props) =>
      props.$styletype === "default"
        ? "var(--primary-light-blue)"
        : "var(--primary-light-blue)"};
    color: ${(props) =>
      props.$styletype === "default"
        ? "var(--primary-default)"
        : "var(--primary-default)"};
  }

  @media (min-width: ${BREAKPOINT}) {
    padding: 8px 12px;
    font-size: 14px;
  }
`;
