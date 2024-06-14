import { useNavigate } from "react-router";
import { BackgroundImage, FormContainer } from "./login.style";
import { H2 } from "../../components/utils/typography";
import Input from "../../components/form/input/input.component";
import Button from "../../components/button.component";
import colors from "../../components/utils/colors";
import Card from "../../components/card/Card";

const Login = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card>
        <H2>Login Page</H2>
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
