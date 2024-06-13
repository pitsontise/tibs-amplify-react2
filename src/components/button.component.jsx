import React from "react";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor ?? "black"};
  width: ${({ width }) => width ?? "inital"};
  color: white;
  font-weight: 700;
  text-decoration: none;
  margin: 20px 30px 0px 30px;
  padding: 8px;
  border: none;
  border-radius: 5px;
`;

const Button = ({ title, onClick, backgroundColor, width }) => {
  return (
    <StyledButton
      type="button"
      width={width}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};

export default Button;
