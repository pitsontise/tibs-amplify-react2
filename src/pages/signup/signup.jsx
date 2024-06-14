import { useNavigate } from "react-router";
import { BackgroundImage, Card, FormContainer } from "./signup.styling";
import { H3 } from "../../components/utils/typography";
import Input from "../../components/form/input/input.component";
import Button from "../../components/button.component";
import colors from "../../components/utils/colors";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <BackgroundImage>
      <Card>
        <H3>Organisation Signup</H3>
        <FormContainer>
          <Input label="First Name" placeholder="Please enter first name" />
          <Input
            label="Last Name"
            placeholder="Please enter last name"
          />
          <Input 
            label="Email"
            placeholder="Enter email address"
          />
          <Input 
            label="Contact Number"
            placeholder="Enter contact number"
          />
          <Input 
            label="Organisation"
            placeholder="Enter the name of your organisation"
          />
          <Input 
            label="Job Title"
            placeholder="Enter your job title in the organisation"
          />


          <Button
            title="Submit Signup Request"
            width="200px"
            backgroundColor={colors.PRIMARY}
            onClick={() => navigate("/dashboard")}
          />
        </FormContainer>
      </Card>
    </BackgroundImage>
  );
};

export default Signup;
