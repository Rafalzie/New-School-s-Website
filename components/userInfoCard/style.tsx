"use client";
import styled from "styled-components";

export const InfoWrapper = styled.div`
  border: 1px solid var(--primary-default);
  border-radius: 20px;
  padding: 1rem;
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: auto auto;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    gap: 2rem;
  }
`;
