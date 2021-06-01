import React from "react";
import styled, { css } from "styled-components";
import { Wrapper, fadeIn } from "./styled/index";
//Style normal component

const StyledButton = styled.button`
  background-color: white;
  color: ${({ theme }) => theme.colors.main};
  font-size: ${({ theme }) => theme.fontSize.p};
  margin: ${({ margin }) => margin || "2rem"};
  padding: 0.5rem 1rem;
  border: 1px solid palevioletred;
  border-radius: 3px;
  animation: 2s ${fadeIn} ease-in;
  ${({ primary }) =>
    primary &&
    css`
      background-color: palevioletred;
      color: white;
      box-shadow: 0 0.5rem 1.5 rem rgba(0, 0, 0, 0.2);
    `}
  &:hover {
    color: white;
    background-color: palevioletred;
  }

  & .someClass {
    color: blue;
  }

  @media ${({ theme }) => theme.mediaQueries["below-768"]} {
    font-size: 0.4rem;
    color: blue;
  }
`;

const OuterWrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  background-color: blueviolet;
  &:hover ${StyledButton} {
    color: red;
  }
`;

//It will try to find a component with the class name of someClass to apply the color to it
// color: ${({ primary }) => (primary ? "yellow" : "#fff")};

// Style component exp: Button from Materials UI
// This is a button that has all the inherited styles from StyledButton
const SuperButton = styled(StyledButton)`
  font-size: 2.5rem;
`;

function Button({ margin, children, primary, bgColor }) {
  return (
    <OuterWrapper>
      <StyledButton primary={primary} bgColor={bgColor} margin={margin}>
        {children}

        {/* <p className="someClass">Hello World</p> */}
      </StyledButton>
    </OuterWrapper>
  );
}

export default Button;
