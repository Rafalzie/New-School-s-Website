import { motion } from "framer-motion";
import styled from "styled-components";

export const ToggleContainer = styled.div`
  position: relative;
  display: flex;
  background-color: var(--primary-light-blue);
  border-radius: 30px;
  padding: 5px;
  cursor: pointer;
  width: 80px;
  height: 40px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  z-index: 1;
`;

export const Background = styled(motion.div)`
  position: absolute;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: #3b82f6;
  top: 3px;
  z-index: 0;
`;
