import { BackgroundImage, Card, FormContainer } from "./login.styling";
import { H3 } from "../../components/utils/typography";
import Input from "../../components/form/input/input.component";

const Login = () => {
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
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default Login;
