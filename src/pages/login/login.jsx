import { useNavigate } from "react-router";
import { BackgroundImage, Card, FormContainer } from "./login.styling";
import { H3 } from "../../components/utils/typography";
import Input from "../../components/form/input/input.component";
import Button from "../../components/button.component";
import colors from "../../components/utils/colors";

const Login = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card>
        <H3>Login Page</H3>
        <FormContainer>
          <Input label="Username" placeholder="Please enter username" />
          <Input
            label="Password"
            placeholder="Please enter password"
            type="password"
          />
          <Button
            title="Login"
            width="150px"
            backgroundColor={colors.PRIMARY}
            onClick={() => navigate("/dashboard")}
          />
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default Login;
