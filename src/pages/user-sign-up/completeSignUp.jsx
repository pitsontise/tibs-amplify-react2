import { useNavigate } from "react-router";
import { BackgroundImage, FormContainer } from "../login/login.styling";
import { H2 } from "../../components/utils/typography";
import Card from "../../components/card/Card";
import Input from "../../components/form/input/input.component";
import Button from "../../components/button.component";
import colors from "../../components/utils/colors";

const CompleteSignUp = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card height="85vh">
        <H2>Complete Sign Up</H2>
        <FormContainer>
          <Input label="Name" placeholder="Please enter name" />
          <Input label="Surname" placeholder="Please enter surname" />
          <Input
            label="Contact Number"
            placeholder="Please enter contact number"
          />
          <Input label="Email" placeholder="Please enter email" type="email" />
          <Input
            label="Organisation Name"
            placeholder="Please enter organisation name"
          />
          <Input
            label="Password"
            placeholder="Please enter password"
            type="password"
          />
          <Input
            label="Confirm Password"
            placeholder="Please re-enter password"
            type="password"
          />
          <Button
            title="Complete Sign Up"
            width="150px"
            backgroundColor={colors.PRIMARY}
            onClick={() => navigate("/login")}
          />
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default CompleteSignUp;
