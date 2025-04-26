import styled from "styled-components";

const deskTopWidth = "382px";
const mobileWidth = "240px";
const breakPoint = "600px";

export const ReusableInput = styled.input`
  width: ${mobileWidth};
  height: 32px;
  padding: 10px;
  border: 1px solid var(--due-border);
  border-radius: 8px;
  background-color: var(--due-bg);

  &:hover {
    border: 1px solid var(--primary-light-blue);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--primary-default);
  }

  @media (min-width: ${breakPoint}) {
    width: ${deskTopWidth};
  }
`;

export const ReusableTextarea = styled.textarea`
  width: ${mobileWidth};
  height: 200px;
  padding: 10px;
  border: 1px solid var(--secondary-dark);
  border-radius: 8px;

  &:hover {
    border: 1px solid var(--secondary-light-300);
  }

  &:focus {
    outline: none;
    border: 1px solid var(--secondary-light-300);
  }

  @media (min-width: ${breakPoint}) {
    width: ${deskTopWidth};
  }
`;

export const Label = styled.label`
  font-size: 12px;
  color: var(--secondary-dark);
  width: ${mobileWidth};

  @media (min-width: ${breakPoint}) {
    width: ${deskTopWidth};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: fit-content;
`;
