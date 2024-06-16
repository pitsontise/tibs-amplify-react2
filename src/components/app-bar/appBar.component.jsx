import { Row } from "react-grid-system";
import { useNavigate } from "react-router";
import styled from "styled-components";
import Button from "../button.component";
import colors from "../utils/colors";
import tibsprocurelogo from "../../res/tibs-procure-logo.jpg";

const LogoContainer = styled.div`
  display: contents;
  position: relative;
  top: -15px;
`;

const ButtonContainer = styled.div`
  position: relative;
  top: -10px;
`;

const logoStyling = {
  width: "100px",
  height: "auto",
  position: "relative",
  top: "-18px",
};

const AppBar = () => {
  const navigate = useNavigate();

  return (
    <Row
      style={{
        height: "55px",
        padding: "0px 25px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <LogoContainer>
        <img src={tibsprocurelogo} alt="Logo" style={logoStyling} />
      </LogoContainer>
      <ButtonContainer>
        <Button
          title="Sign out"
          width="100px"
          backgroundColor={colors.PRIMARY}
          onClick={() => navigate("/login")}
        />
      </ButtonContainer>
    </Row>
  );
};

export default AppBar;
