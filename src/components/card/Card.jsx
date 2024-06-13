import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: white;
  border-radius: 20px;
  width: ${({ width }) => width ?? "40vw"};
  height: ${({ height }) => height ?? "50vh"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Card = ({ children, width, height }) => {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
};

export default Card;
