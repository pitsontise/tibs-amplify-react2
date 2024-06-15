import styled from "styled-components";
import tibsprocurebackground from "../../../res/tibs-procure-background.jpg";
import colors from "../../../components/utils/colors";

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

export const ForgotPasswordText = styled.a`
  margin-top: 10px;
  font-size: 8pt;
  color: ${colors.PRIMARY};
  text-decoration: underline;
`;
