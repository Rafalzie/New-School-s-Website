"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

// const breakpoint = "768px";

// export const HeaderContainer = styled(motion.div)`
//   width: 100%;
//   height: 6.25rem;
//   background-color: var(--primary-light-grey);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 10px 20px;
//   grid-area: header;

//   /* @media (min-width: ${breakpoint}) {
//     display: hidden;
//   } */
// `;

const breakpoint = "768px";

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    display: none;
  }

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: var(--secondary-dark);
  }

  p {
    font-size: 16px;
    margin-top: 4px;
    color: var(--secondary-light-300);
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid var(--secondary-light-200);
  border-radius: 100px;
  background: none;
  cursor: pointer;

  &:hover {
    background: var(--primary-light-grey);
  }
`;
export const NotificationDropdown = styled.button`
  cursor: pointer;
  border: 1px solid var(--secondary-light-200);
  border-radius: 100px;
  padding: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const SearchInputContainer = styled.div`
  position: relative;
`;

export const SearchInput = styled.input`
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  width: 150px;
`;
