import styled from "styled-components";
import tibsprocurebackground from "../../res/tibs-procure-background.jpg";

export const BackgroundImage = styled.div`
  background-image: url(${tibsprocurebackground});
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  width: 30vw;
  height: auto;
`;
