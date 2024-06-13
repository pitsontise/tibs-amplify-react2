import React from 'react';
import styled from "styled-components";

export const StyledTestButton = styled.a`
    background-color: black;
    color: white;
    font-weight: 700;
    text-decoration: none;
    margin: 20px 30px 0px 30px;
    padding: 8px;
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledTestButton onClick={onClick}>
      {children}
    </StyledTestButton>
  );
};

export default Button;

