import styled from "styled-components";
import UsersAll from "../users/users.all";
import { H3 } from "../../components/utils/typography";
import Tabs from "../../components/tabs/tabs.component";
import AppBar from "../../components/app-bar/appBar.component";

const Container = styled.div`
  margin-left: 10px;
`;

const TendersContainer = styled.div`
  margin: 15px;
`;

const Dashboard = () => {
  const tabs = [
    {
      id: 0,
      title: "Users",
      component: <UsersAll />,
    },
    {
      id: 1,
      title: "Tenders",
      component: <TendersContainer>List of tenders</TendersContainer>,
    },
  ];

  return (
    <>
      <AppBar />
      <Container>
        <H3>Dashboard</H3>
      </Container>
      <Tabs data={tabs ?? []} />
    </>
  );
};

export default Dashboard;
