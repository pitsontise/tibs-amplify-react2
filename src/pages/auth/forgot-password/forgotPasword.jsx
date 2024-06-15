import { useNavigate } from "react-router";
import { BackgroundImage, Card, FormContainer } from "../signup/signup.styling";
import { H3 } from "../../../components/utils/typography";
import Input from "../../../components/form/input/input.component";
import Button from "../../../components/button.component";
import colors from "../../../components/utils/colors";

const ForgotPasword = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card>
        <H3>Forgot Password</H3>
        <FormContainer>
          <Input label="Email" placeholder="Enter email address" />

          <Button
            title="Submit"
            width="200px"
            backgroundColor={colors.PRIMARY}
            onClick={() => navigate("/login")}
          />
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default ForgotPasword;
