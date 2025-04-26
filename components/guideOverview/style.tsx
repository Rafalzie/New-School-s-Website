import { Wrapper } from "globalStyles/globalStyles";
import styled from "styled-components";

export const Main = styled.div`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 32px;
`;

export const Side = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const MaterialsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
`;

export const ReturnWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Requirements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;
  padding: 16px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const Content = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 8fr 3fr;
    grid-template-areas: "main side";
    gap: 42px;
  }
`;

export const Container = styled(Wrapper)`
  padding: 2rem;
  gap: 2rem;
`;
