import styled from "styled-components";
import tibsprocurebackground from "../../res/tibs-procure-background.jpg";

export const Page = styled.div`
  background-image: url(${tibsprocurebackground});
  width: 100vw;
  height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppTitle = styled.h1`
  width: 20vw;
  padding-left: 10px;
`;

export const Menu = styled.div`
  margin-top: 50px;
`;

export const ButtonContainer = styled.div`
  margin-top: 50px;
`;

export const MenuItem = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: black;
  margin: 20px 30px 0px 30px;
`;

export const WelcomeContainer = styled.div`
  height: 40vh;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  padding-left: 25px;
`;

export const LogoContainer = styled.img`
  width: 50%;
  height: 50%;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 50px;

  h2 {
    font-size: 22pt;
  }
  h3 {
    font-size: 18pt;
  }
  p {
    font-size: 14pt;
  }
`;

export const TestContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  height: auto;
  margin-top: 380px;
`;

export const BlackCard = styled.div`
  background-color: black;
  border-radius: 25px;
  width: 300px;
  height: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  i {
    color: red;
    font-size: 18pt;
  }
  h5 {
    color: white;
    font-size: 18pt;
    font-weight: 600;
  }
  p {
    color: white;
    margin: 10px 30px;
  }
  a {
    color: black;
    background-color: red;
    text-decoration: none;
    padding: 5px 8px;
    border-radius: 75px;
    font-weight: 700;
  }
`;

export const EProcurementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const EProcureSubTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  color: red;
  font-weight: 700;
  font-size: 35pt;
  margin-bottom: 25px;
`;
