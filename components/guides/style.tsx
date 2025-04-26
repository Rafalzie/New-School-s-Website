"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 95%;
  padding: 5px;

  @media (max-width: 768px) {
    margin: auto;
    width: 100vw;
    overflow-x: hidden;
  }
`;

export const GradeAverageContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: end;
  padding-right: 10px;

  @media (max-width: 768px) {
    text-align: center;
    padding-left: 15px;
    justify-content: center;
  }
`;

export const AverageRow = styled.div`
  margin-bottom: 10px;
  width: 16.5rem;
  margin-right: 13%;
  margin-bottom: 37px;
  height: auto;
  background-color: var(--primary-white);
  align-self: center;
  padding: 14px 27px;
  border: solid 1px;
  border-color: var(--secondary-light-200);
  border-radius: 36px;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0%;
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const AverageLabel = styled.strong<{ color?: string }>`
  font-size: 16px;
  color: ${({ color }) => color || "var(--secondary-light-300)"};
  font-weight: 600;
`;

export const AverageValue = styled.span<{ $isPassed: boolean }>`
  color: ${({ $isPassed }) => ($isPassed ? "#73e2a3" : "var(--fail-text)")};
  font-weight: bold;
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  width: 17.5rem;
  margin-bottom: 44px;

  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 10px;
  }
`;

export const ProgressText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: var(--primary-default);
`;
