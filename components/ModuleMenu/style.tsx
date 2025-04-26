import styled from "styled-components";

export const SubheaderContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  padding: 10px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    position: absolute;
    top: 0px;
    left: 32%;
    width: 64%;
  }
`;

export const ModuleContainer = styled.div<{ $zIndex?: number }>`
  gap: 10px;
  width: 100%;

  z-index: ${(props) => props.$zIndex ?? 2};

  .desktop-view {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .mobile-view {
    display: none;
  }

  @media (max-width: 850px) {
    .desktop-view {
      display: none;
    }

    .mobile-view {
      display: block;
      font-weight: 600;
      color: var(--secondary-dark);
    }
  }
`;

export const ModuleOptionContainer = styled.button<{ $isActive: boolean }>`
  padding: 10px 20px;
  color: var(--secondary-light-300);
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  background: none;
  padding-bottom: 15px;
  position: relative;

  &:hover {
    color: var(--primary-default);
  }

  &:focus {
    outline: none;
  }

  ${({ $isActive }) =>
    $isActive
      ? ` 
        color: var(--primary-default);
        font-weight: bold;
        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: var(--primary-default);
        }
      `
      : ""}
`;
export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  width: 95%;

  background: var(--primary-white);
  border: 1px solid var(--secondary-light-200);
  border-radius: 8px;
  z-index: 50;

  ${ModuleOptionContainer} {
    padding: 10px;
  }
`;
export const StyledButton = styled.button`
  padding: 10px;
  background-color: var(--primary-default);
  color: white;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

export const FilterContainer = styled.div`
  position: absolute;
  display: inline-block;
  right: 0;
  top: calc(50% - 10px);
  transform: translateY(-50%);
  @media (max-width: 768px) {
    top: calc(50%);
    transform: translateY(-50%);
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  left: 0;
  margin-top: 8px;
  width: 9.375rem;
  background: var(--primary-white);
  border: 1px solid var(--secondary-light-200);
  border-radius: 8px;
  z-index: 50;
  @media (max-width: 768px) {
    left: unset;
    right: 0;
    width: 8rem;
  }
`;

export const FilterItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  padding: 10px 12px;
  border: none;
  background: transparent;
  font-size: 14px;
  color: var(--secondary-light-300);
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: var(--primary-light-blue);
  }
  @media (max-width: 768px) {
    &:hover {
      background: transparent;
    }
  }
`;

export const FilterButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  color: var(--secondary-light-300);
  padding: 8px 16px;
  border: 1px solid var(--secondary-light-200);
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 5px;

    span {
      display: none;
    }
  }
`;

export const Bar = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10;
  width: 100%;
  height: 1px;
  z-index: -1;
  background-color: var(--secondary-light-200);

  @media (max-width: 768px) {
    display: none;
  }
`;
