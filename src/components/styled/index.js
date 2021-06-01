import styled, { keyframes } from "styled-components";
import React from "react";

export const Wrapper = styled.section`
  margin-top: 2px;
  background-color: paleturquoise;
`;

//keyframe for animation
export const fadeIn = keyframes`
  0% {
    opacity:0;
  }
  1000% {
    opacity:1;

  }
`;
