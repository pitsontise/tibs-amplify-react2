import { useNavigate } from "react-router";
import { BackgroundImage, Card, FormContainer } from "../signup/signup.styling";
import { H3 } from "../../../components/utils/typography";
import Input from "../../../components/form/input/input.component";
import Button from "../../../components/button.component";
import colors from "../../../components/utils/colors";

const ResetPassword = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card>
        <H3>Reset Password</H3>
        <FormContainer>
          <Input
            label="New Password"
            placeholder="Please enter new password"
            type="password"
          />
          <Input
            label="Confirm Password"
            placeholder="Please re-enter password"
            type="password"
          />

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

export default ResetPassword;
